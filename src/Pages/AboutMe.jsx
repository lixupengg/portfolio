// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------
import SingleProject from '../Components/SingleProject.jsx'
import MyCarousel from '../Components/MyCarousel.jsx'
import Popup from "reactjs-popup";
import trippyy from '../Assets/trippyy.PNG'
import wsg from '../Assets/WSG.png'
import scdf from '../Assets/scdf.png'
import uniquirk from '../Assets/uniquirk.png'
import blank from '../Assets/blank.png'

import './Page.css';

class AboutMe extends Component{

state = {
	open: false
}

closeModal = () => {
	this.setState({open: false});
}

  render() {
      return (
		  <section id="portfolio" class="portfolio">
		    <div class="container">

		      <div class="section-title">
		        <h2>Portfolio</h2>
		        <p>My Works</p>
		      </div>

		      <div class="row portfolio-container">

		        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
		          <div class="portfolio-wrap">
		            <img src={trippyy} class="img-fluid" alt=""/>
		            <div class="portfolio-info">
		              <h4>TRIPPYY</h4>
		              <h6>  a travel web application that {<br/>} aspires to be a super-app</h6>
		              <div class="portfolio-links">
		              	<h5> STACK USED: </h5>
		              	<p> ReactJS </p>
		              	<p> Redux </p>
		              	<p> Django-REST </p>
		              	<p> {" "} </p>
		              	<div className="learnMoreButton venobox" onClick={() => this.setState({open: true})}>
		              		LEARN MORE
		              	</div>
		              </div>
		            </div>
		          </div>
		        </div>

		        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
		          <div class="portfolio-wrap">
		            <img src={wsg} class="img-fluid" alt=""/>
		            <div class="portfolio-info">
		              <h4>WSG Newsletter</h4>
		              <h6> a HTML email newsletter to educate Singaporean businesses about new govermental initiatives</h6>
			              <div class="portfolio-links">
			              	<h5> STACK USED: </h5>
			              	<p> HTML (inline CSS) </p>
			              	<div className="learnMoreButton">
			              		LEARN MORE
			              	</div>
			             </div>
		            </div>
		          </div>
		        </div>

		        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
		          <div class="portfolio-wrap">
		            <img src={scdf} class="img-fluid" alt=""/>
		            <div class="portfolio-info">
		              <h4>SCDF myResponders Campaign</h4>
		              <h6> a campaign website developed to promote the usage of the app myResponders</h6>
			              <div class="portfolio-links">
			              	<h5> STACK USED: </h5>
			              	<p> ReactJS </p>
			              	<div className="learnMoreButton">
			              		LEARN MORE
			              	</div>
			             </div>
		            </div>
		          </div>
		        </div>

		        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
		          <div class="portfolio-wrap">
		            <img src={uniquirk} class="img-fluid" alt=""/>
		            <div class="portfolio-info">
		              <h4>UNIQUIRK Filters</h4>
		              <h6> Development of Instagram filters to spread exposure of a local social media agency, UNIQUIRK.</h6>
			              <div class="portfolio-links">
			              	<h5> STACK USED: </h5>
			              	<p> Spark AR </p>
			              	<div className="learnMoreButton">
			              		LEARN MORE
			              	</div>
			             </div>
		            </div>
		          </div>
		        </div>

		        <div class="col-lg-4 col-md-6 portfolio-item">
		          <div class="">
		            <img src={blank} class="img-fluid" alt=""/>
		          </div>
		        </div>

		        <div class="col-lg-4 col-md-6 portfolio-item">
		          <div class="">
		            <img src={blank} class="img-fluid" alt=""/>
		          </div>
		        </div>
		      </div>

		    </div>

		   	<Popup
		        open={this.state.open}
		        closeOnDocumentClick
		        onClose={this.closeModal}
	        >	
	        	<div className="popupBox">
	        	<i className='bx bx-window-close crossIcon' onClick={this.closeModal}></i>
	        	<div className="row">
	        		<div className="caroBox col-6">
	        			<MyCarousel/>
	        		</div>

	        		<div className="textBox" col6>
	        			<h3> Trippyy </h3>
	        			<p> A travel web application using ReactJS, Redux, and Django that integrates algorithms to automatically suggest convenient and well-thought-out itineraries which are optimised in terms of geo-convenience, time, and costs based on user input.</p>
	        			<p> An ongoing project, and aspiring to add more features as travel unfolds again. </p>
	        			<p> Developed in the summer of 2019. </p>
	        			<p> View the project {<a href="https://youtu.be/bDtzUbDFLvY" target="_blank"> here! </a>} </p>
	        			<h4> STACK USED: </h4>
	        			<p> ReactJS </p>
	        			<p> Redux </p>
	        			<p> Django-REST </p>
	        		</div>
	        	</div>
	        	</div>
	        </Popup>
		  </section>
       );
  }
}

export default AboutMe;
