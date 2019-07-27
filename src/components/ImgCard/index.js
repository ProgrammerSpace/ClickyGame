import React from 'react';
import './style.css'
import {
    Card, CardImg
} from 'reactstrap';

const img = (props) => {
    return (
        <Card className="card float-left">
            <CardImg className="tile" data-id={props.id} src={props.src} alt={props.name} />
        </Card>
    );
};

export default img;