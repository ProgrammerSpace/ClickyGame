import React, { Component } from 'react';
import { Badge } from 'reactstrap';

class Score extends Component {
    state = {
        score: 0,
        topscore: 0
    }
    render() {
        return (
            <div>
                <h1 className="float-right mr-3 mt-2"><Badge color="primary">Score {this.state.score} | Top Score {this.state.topscore}</Badge></h1>
            </div >
        );
    }
}
export default Score;