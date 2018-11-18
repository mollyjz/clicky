import React from 'react';
import './Jumbotron.css';

// By extending the React.Component class, Counter inherits functionality from it
const Jumbotron = (props) => {
    // The render method returns the JSX that should be rendered
    return (
    <div className="jumbotron">
        <h1 className="display-4">Clicky Game!</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
    </div>
    );
};

export default Jumbotron;