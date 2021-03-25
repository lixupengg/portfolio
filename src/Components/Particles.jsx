// Basic Imports
import React, { Component, Fragment } from "react";
import Particles from 'react-tsparticles';
// -------------------------------------------------------------------------

import "./Particles.css";
import Music from "../Assets/music.png";

class Particle extends Component{
    constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {

    return (
      <div class="particlesBox">
        <img class="musicIcon icon1" src={Music}/>
        <img class="musicIcon icon2" src={Music}/>
        <img class="musicIcon icon3" src={Music}/>
      </div>
      )
//       return (
//       	<div class="particlesBox">
//       <Particles
//         id="tsparticles"
//         width="30vw"
//         height="30vh"
//         init={this.particlesInit}
//         loaded={this.particlesLoaded}
//         options={{
//   "particles": {
//     "number": {
//       "value": 20,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": "#ffffff"
//     },
//     "shape": {
//       "type": "image",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "https://www.flaticon.com/svg/vstatic/svg/1051/1051994.svg?token=exp=1615142739~hmac=17a527785c7adebde8500099fe1b357f",
//         "width": 10,
//         "height": 10
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": true,
//         "speed": 0.1,
//         "opacity_min": 0,
//         "sync": true
//       }
//     },
//     "size": {
//       "value": 20,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 4,
//         "size_min": 10,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": false,
//       "distance": 150,
//       "color": "#ffffff",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 3,
//       "direction": "top-left",
//       "random": true,
//       "straight": true,
//       "out_mode": "bounce",
//       "bounce": false,
//       "attract": {
//         "enable": true,
//         "rotateX": 3630.079151508454,
//         "rotateY": 600
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "bubble"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "repulse"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 400,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 250,
//         "size": 0,
//         "duration": 2,
//         "opacity": 0,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 400,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// }}
//       />
//         </div>

//        );
  }
}

export default Particle;
