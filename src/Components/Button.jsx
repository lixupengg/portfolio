// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------

import './Button.css';
import User from '../Assets/user.png'
import Contact from '../Assets/contact.png'
import Projects from '../Assets/projects.png'


class Button extends Component{

  state = {
  	user: false,
  	projects: false,
  	contact: false,
  }

  render() {
      return (
      	<div class="buttonContainer">
      		<div class ="buttonContent">
      			contact me!
      		</div>
        </div>

       );
  }
}

export default Button;
