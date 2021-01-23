// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------


// Sound imports
import testMp3 from './Test.mp3';
import sound1 from './1.mp3'
import sound2 from './2.mp3'
import sound3 from './3.mp3'
import sound4 from './4.mp3'

import logo from './logo.svg';
import './App.css';


const greeting1 = new Audio(sound1);
const greeting2 = new Audio(sound2);
const greeting3 = new Audio(sound3);
const greeting4 = new Audio(sound4);

const playSound = audioFile => {
  audioFile.play();
}

class App extends Component{

  buttonClick = () => {
    greeting1.play();
  }


  render() {
      return <div class="container">
          <h1> Hello World! </h1> 
          <button class ="button" onClick={() => playSound(greeting1)}> Gong Xi Fa Cai! </button> 
          <button class ="button" onClick={() => playSound(greeting2)}> Hong Yun Dang Tou! </button> 
          <button class ="button" onClick={() => playSound(greeting3)}> Shen Ti Jian Kang! </button> 
          <button class ="button" onClick={() => playSound(greeting4)}> Cai Yuan Gun Gun! </button> 
        </div>;
  }
}

export default App;
