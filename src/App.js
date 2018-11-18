import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Img from "./components/Img.json";
// import Grid from "./components/Grid";

//NOT EVEN RENDERING THE APP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import puppy1 from "./images/puppy1.jpg";
import puppy2 from "./images/puppy2.jpg";
import puppy3 from "./images/puppy3.jpg";
import puppy4 from "./images/puppy4.jpg";
import puppy5 from "./images/puppy5.jpg";
import puppy6 from "./images/puppy6.jpg";
import puppy7 from "./images/puppy7.jpg";
import puppy8 from "./images/puppy8.jpg";
import puppy9 from "./images/puppy9.jpg";
import puppy10 from "./images/puppy10.jpg";
import puppy11 from "./images/puppy11.jpg";
import puppy12 from "./images/puppy12.jpg";
import puppy13 from "./images/puppy13.jpg";
import puppy14 from "./images/puppy14.jpg";
import puppy15 from "./images/puppy15.jpg"

class App extends Component {
// Setting initial state values
    state = {
        Img,
        picked: [],
        correct: 0,
        topScore: 0,
        message: "Click an image to begin!"
    };

    shuffleArray = (array) => {
        let imgArray = Img;
        for (let i = imgArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
        }
        return imgArray;
    };

    pickImg = (filename) => {
        let picked = this.state.picked; //array of photos that have been picked so far - OK
        
        if (picked.indexOf(filename) === -1) { //if filename passed in hasn't been picked...
            this.setState({
                picked: picked.concat(filename), //add that filename to the picked array
                correct: this.state.correct + 1, //add 1 to score
                topScore: this.state.correct + 1 > this.state.topScore ? this.state.correct + 1 : this.state.topScore,
                message: "Correct!"
            });
            this.shuffleArray();
        }
        
        else {
            this.setState({
                message: "Incorrect!",
                correct: 0,
                picked: []
            });
        }

    };

    imgSwitch = (filename) => {
        switch (filename) {
            case "puppy1":
                return `${puppy1}`
            case "puppy2":
                return `${puppy2}`
            case "puppy3":
                return `${puppy3}`
            case "puppy4":
                return `${puppy4}`
            case "puppy5":
                return `${puppy5}`
            case "puppy6":
                return `${puppy6}`
            case "puppy7":
                return `${puppy7}`    
            case "puppy8":
                return `${puppy8}`
            case "puppy9":
                return `${puppy9}`
            case "puppy10":
                return `${puppy10}`
            case "puppy11":
                return `${puppy11}`
            case "puppy12":
                return `${puppy12}`
            case "puppy13":
                return `${puppy13}`
            case "puppy14":
                return `${puppy14}`
            case "puppy15":
                return `${puppy15}`
            default:
                return `${puppy1}`
        }
    };

  // Map over this.state.images and render an image component for each image object
    render() {
        return (
        <Wrapper>
            <Navbar correct={this.state.correct} topScore={this.state.topScore} message={this.state.message}
        />
        <Jumbotron />
        {this.shuffleArray(Img).map(image => ( //generate new array from running shuffle function; for each image, on click, run pickImg function to see if picked before
            <ImageCard src={this.imgSwitch(image.filename)} source={image.source} filename={image.filename} key={image.id} pickImg={this.pickImg}  />
          ))}
        </Wrapper>
        );
    };

}

export default App;