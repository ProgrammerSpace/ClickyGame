import React from 'react';
import {
    Card, CardImg
} from 'reactstrap';

const img = (props) => {
    return (
        <Card max-width="200px">
            <CardImg data-id={props.id} src={props.src} alt={props.name} />
        </Card>
    );
};

export default img;