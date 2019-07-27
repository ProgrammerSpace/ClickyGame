import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Badge from './components/Badge';
import Jumbo from './components/Jumbotron';
import Card from './components/ImgCard'
import images from "./images.json";
import './App.css';

class App extends Component {

  state = {
    images,
    score: 0,
    topscore: 0
  };

  // Set top score from local storage
  componentDidMount() {
    let ts = localStorage.getItem("topscore");
    console.log(ts);
    if (ts !== null) {
      console.log("hit not null!");
      this.setState({
        topscore: ts
      });
    } else {
      this.setState({
        topscore: 0
      });
    }
  }

  // Before component unmount
  // Page reload doesn't actually unmount components, componentWillUnmount is not going to hit before reload.
  componentWillUnmount() {
    localStorage.setItem("topscore", this.state.topscore);
  }

  // Shuffle images array
  shuffleTiles = (array) => {
    array.sort(function () {
      return 0.5 - Math.random();
    });
  }

  // When you click on tile
  handleClick = event => {
    event.preventDefault();
    let clicked = event.target.getAttribute('data-clicked');
    if (clicked === 'true') {
      localStorage.setItem("topscore", this.state.topscore);
      alert("Oh no!! Why don't you try again");
      document.location.reload(true);
    } else {
      event.target.setAttribute('data-clicked', true);
      let score = this.state.score;
      let topscore = this.state.topscore;
      score += 1;
      if (score > topscore) {
        topscore = score;
      }
      this.setState({
        score: score,
        topscore: topscore
      });
    }
    this.shuffleTiles(this.state.images);
  };

  render() {
    return (
      <>
        <Badge score={this.state.score} topscore={this.state.topscore} />
        <Jumbo />
        <Container>
          {this.state.images.map(image => (
            <Card
              id={image.id}
              key={image.id}
              name={image.name}
              src={image.image}
              handleClick={this.handleClick}
            />
          ))}
        </Container>
        {console.log(this.state.images)}
      </>
    );
  }
}

export default App;
