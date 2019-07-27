import React from 'react';
import './style.css'
import {
    Card, CardImg
} from 'reactstrap';

const img = (props) => {
    return (
        <Card className="box float-left" onClick={props.handleClick}>
            <CardImg className="tile" data-clicked={false} data-id={props.id} src={props.src} alt={props.name} />
        </Card>
    );
};

export default img;