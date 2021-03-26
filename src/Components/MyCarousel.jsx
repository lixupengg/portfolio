import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------
import SingleProject from '../Components/SingleProject.jsx'
import Popup from "reactjs-popup";
import trippyy from '../Assets/trippyy-1.png'
import trippyy1 from '../Assets/trippyy-2.png'
import trippyy2 from '../Assets/trippyy-3.png'
import trippyy3 from '../Assets/trippyy-4.png'
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
            {this.props.samples.map((sample) => 
              <div className="picBox">
                <img className="caroPic" src={sample}/>
              </div>)
            }
        </Carousel>
        </div>
            
      	);
  }
}

export default MyCarousel;
