// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------

import './Sidebar.css';
import User from '../Assets/user.png'
import Contact from '../Assets/contact.png'
import Projects from '../Assets/projects.png'
import Record from '../Assets/record.png'
import Resume from '../Assets/resume.png'

class Sidebar extends Component{

  state = {
  	user: false,
  	projects: false,
  	contact: false,
  }

  showUser = (event) => {
	// this.setState({user : true});
  }

  hideUser = (event) => {
  	// this.setState({user : false});
  }

  showProjects = (event) => {
	// this.setState({projects : true});
  }

  hideProjects = (event) => {
  	// this.setState({projects : false});
  }

  showContact = (event) => {
	// this.setState({contact : true});
  }

  hideContact = (event) => {
  	// this.setState({contact : false});
  }

  render() {
      return (
      	<div class="sidebarContainer animate__animated animate__fadeInRight">
      		<div class="iconContainer">
	      		<img onMouseEnter ={this.showUser} onMouseLeave ={this.hideUser} class="icon" src={User}/>
	      	</div>

	      	<a class="iconContainer" href="#portfolio">
	      		<img onMouseEnter ={this.showProjects} onMouseLeave ={this.hideProjects} class="icon" src={Projects}/>
            <div className="iconOverlayBox">
              <p className="iconOverlay"> WORKS </p>
            </div>
	      	</a>

          <a class="iconContainer" href="#resume">
            <img onMouseEnter ={this.showProjects} onMouseLeave ={this.hideProjects} class="icon" src={Resume}/>
            <div className="iconOverlayBox">
              <p className="iconOverlay"> RESUME </p>
            </div>
          </a>

	      	<a class="iconContainer" href="#contact">
	      		<img onMouseEnter ={this.showContact} onMouseLeave ={this.hideContact} class="icon" src={Contact}/>
            <div className="iconOverlayBox">
              <p className="iconOverlay"> CONTACT </p>
            </div>
	      	</a>

          <div class="iconContainer">
            <img class="icon record" src={Record}/>
          </div>
        </div>

       );
  }
}

export default Sidebar;
