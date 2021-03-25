import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------
import SingleProject from '../Components/SingleProject.jsx'
import Popup from "reactjs-popup";
import trippyy from '../Assets/trippyy.PNG'
import wsg from '../Assets/WSG.png'
import scdf from '../Assets/scdf.png'
import uniquirk from '../Assets/uniquirk.png'
import blank from '../Assets/blank.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./MyCarousel.css"

class MyCarousel extends Component{

state = {
	open: false
}

  render() {
      return (
        <div className ="carouselContainer">
      	<Carousel 
          className="carousel-wrapper"
      		autoPlay = "True"
      		stopOnHover= "true"
      		infiniteLoop = "true"
      		dynamicHeight = "true"
          showThumbs={false}
      	>
                <div className="picBox">
                    <img className="caroPic" src={wsg} />
                </div>
                <div className="picBox">
                    <img className="caroPic" src={trippyy} />
                </div>
                <div className="picBox">
                    <img className="caroPic" src={uniquirk} />                    
                </div>
            </Carousel>
            </div>
            
      	);
  }
}

export default MyCarousel;
