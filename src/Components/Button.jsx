// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------

import './Button.css';
import User from '../Assets/user.png'
import Contact from '../Assets/contact.png'
import Projects from '../Assets/projects.png'
import resume from "../lixupeng.pdf"


class Button extends Component{

  state = {
  	user: false,
  	projects: false,
  	contact: false,
  }

  render() {
      return (
      	<a class="buttonContainer" href={resume} target="_blank">
      		<div class ="buttonContent">
            <i className ="bx bxs-download downloadIcon"/>
            {"  "}
      			Resume
      		</div>
        </a>

       );
  }
}

export default Button;
