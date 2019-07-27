import React from 'react';
import { Badge } from 'reactstrap';

const Score = (props) => {
    return (
        <div>
            <h1 className="float-right mr-3 mt-2"><Badge color="primary">Score {props.score}</Badge></h1>
        </div>
    );
}
export default Score;