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
      			{this.state.user ? <p class="iconText animate__animated animate__fadeInRight animate__faster"> about me </p> : null}
	      		<img onMouseEnter ={this.showUser} onMouseLeave ={this.hideUser} class="icon" src={User}/>
	      	</div>

	      	<div class="iconContainer">
	      		{this.state.projects ? <p class="iconText animate__animated animate__fadeInRight animate__faster"> my projects </p> : null }
	      		<img onMouseEnter ={this.showProjects} onMouseLeave ={this.hideProjects} class="icon" src={Projects}/>
            <p className="iconOverlay"> WORKS </p>
	      	</div>

          <div class="iconContainer">
            {this.state.projects ? <p class="iconText animate__animated animate__fadeInRight animate__faster"> my projects </p> : null }
            <img onMouseEnter ={this.showProjects} onMouseLeave ={this.hideProjects} class="icon" src={Resume}/>
            <p className="iconOverlay"> RESUME </p>
          </div>

	      	<div class="iconContainer">
	      		{this.state.contact ? <p class="iconText animate__animated animate__fadeInRight animate__faster"> contact me </p> : null }
	      		<img onMouseEnter ={this.showContact} onMouseLeave ={this.hideContact} class="icon" src={Contact}/>
            <p className="iconOverlay"> CONTACT </p>
	      	</div>

          <div class="iconContainer">
            <img class="icon record" src={Record}/>
          </div>
        </div>

       );
  }
}

export default Sidebar;
