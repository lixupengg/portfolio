// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------

import resume from "../lixupeng.pdf"
import Button from "../Components/Button.jsx"

import './Page.css';

class Page extends Component{
  render() {
      return (
      	<div class="pageContainer">
	      	<div class="introTextContainer">
            <p class="tagFont animate__animated animate__fadeInLeft"> {"<h1>"} </p>

            <div class="sentence animate__animated animate__fadeInLeft">
	           <p class="introFont"> Hi, </p>
            </div>

            <div class="sentence animate__animated animate__fadeInLeft animate__delay-1s">
              <p class="introFont"> I'm </p>
              <div class="xupengContainer">
  	           <p class="introFont"> Xupeng </p>
               <p class="introFont green">X</p>
               <p class="introFont red">X</p>
              </div>
              <p class="tagFont"> {"</h1>"} </p>
            </div>

            <div class="sentence animate__animated animate__fadeInLeft animate__delay-1s">
              <p> An aspiring software engineer, currently a penultimate student in NUS computer science. </p>
            </div>
	        </div>

          <div class="detailsContainer">
            <div class="animate__animated animate__fadeIn animate__delay-1s">
                <Button link={resume} buttonContent="Download Resume"/>
            </div>
          </div>

          <div class="animate__animated animate__fadeIn animate__delay-1s">
            <p class = "scrolldownFont left"> scroll down! >> </p>
          </div>
          

        </div>

       );
  }
}

export default Page;
