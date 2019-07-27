import React, { Component } from 'react';
import Badge from './components/Badge';
import Jumbo from './components/Jumbotron';
import Card from './components/ImgCard'
import images from "./images.json";
import './App.css';

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <>
        <Badge />
        <Jumbo />
        {this.state.images.map(image => (
          <Card
            id={image.id}
            key={image.id}
            name={image.name}
            src={image.image}
          />
        ))}
        {console.log(this.state.images)}
      </>
    );
  }
}

export default App;
