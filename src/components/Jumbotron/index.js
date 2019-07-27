import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Clicky Game!!</h1>
                <h5 className="display-5">Click on an image to earn points, but don't click on any image more than once!</h5>
            </Jumbotron>
        </div>
    );
};

export default Header;