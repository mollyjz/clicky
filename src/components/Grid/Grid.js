import React from 'react';
import './Grid.css';
import ImageCard from '../ImageCard'

const Grid = (props) => {
    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-md-4">
                        <ImageCard />
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <ImageCard />
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <ImageCard />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Grid;