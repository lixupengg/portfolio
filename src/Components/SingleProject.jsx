// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------

import './SingleProject.css';
import User from '../Assets/user.png'
import Contact from '../Assets/contact.png'
import Projects from '../Assets/projects.png'


class SingleProject extends Component{

  state = {
  	user: false,
  	projects: false,
  	contact: false,
  }

  render() {
      return (
      	<div class="singleProjectContainer">
      		<img class="imagePicture" src={this.props.projectPhoto}/>
        </div>

       );
  }
}

export default SingleProject;
