import React from 'react';
import './ImageCard.css';

const ImageCard = (props) => {
    return(
        <div className="imgContainer">
            <img src={props.src} style={{width: '28%', height: '400px', padding: '15px'}} source={props.source} alt={props.filename} onClick={() => props.pickImg(props.filename)} />
        </div>
    )
};

export default ImageCard;