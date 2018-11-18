import React from 'react';
import './Navbar.css';


// By extending the React.Component class, Counter inherits functionality from it
const Navbar = (props) => {
    return (        
        <div className="d-flex flex-row bd-highlight mb-3 mainDiv">
            <div className="p-2 bd-highlight title"><a className="navbar-brand" href="/">Clicky Game</a></div>
            <div className="p-2 bd-highlight status">{ props.message }</div>
            <div className="p-2 bd-highlight score">
                <span>
                    <span className="score">Score: { props.correct }</span>
                    <span> { " | " } </span>
                    <span className="topScore"> Top Score: { props.topScore } </span>
                </span>
            </div>
        </div>
    );
}

export default Navbar;