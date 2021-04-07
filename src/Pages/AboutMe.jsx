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

import trippyy1 from '../Assets/trippyy-1.png'
import trippyy2 from '../Assets/trippyy-2.png'
import trippyy3 from '../Assets/trippyy-3.png'
import trippyy4 from '../Assets/trippyy-4.png'

import wsg1 from '../Assets/wsg-1.png'
import wsg2 from '../Assets/wsg-2.png'

import uniquirk1 from '../Assets/uniquirk-1.jpg'
import uniquirk2 from '../Assets/uniquirk-2.jpg'
import uniquirk3 from '../Assets/uniquirk-3.jpg'

import herodash1 from '../Assets/herodash1.jpeg'
import herodash2 from '../Assets/herodash2.jpeg'
import herodash3 from '../Assets/herodash3.jpeg'

import Reveal from 'react-reveal/Reveal';
import './Page.css';

const trippyySamples = [trippyy4, trippyy2, trippyy1, trippyy3];
const wsgSamples = [wsg1, wsg2]
const uniquirkSamples = [uniquirk1, uniquirk2, uniquirk3]
const scdfSamples = [herodash1, herodash2, herodash3]
class AboutMe extends Component{

state = {
	trippyyOpen: false,
	wsgOpen: false,
	uniquirkOpen: false,
	scdfOpen: false,
}
  render() {
      return (
		  <section id="portfolio" class="portfolio">
		    <div class="container">
		      <div class="section-title">
		        <h2>Portfolio</h2>
		        <p>My Works</p>
		      </div>

		      <Reveal effect="animate__animated animate__fadeInRight animate__faster">
		      <div class="wrapForZoom">
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
		              	<div className="learnMoreButton" onClick={() => this.setState({trippyyOpen: true})}>
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
			              	<div className="learnMoreButton" onClick={() => this.setState({wsgOpen: true})}>
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
			              	<p> FIREBASE </p>
			              	<div className="learnMoreButton" onClick={() => this.setState({scdfOpen: true})}>
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
		              <h6> Developed Instagram filters to spread exposure of a local social media agency, UNIQUIRK.</h6>
			              <div class="portfolio-links">
			              	<h5> STACK USED: </h5>
			              	<p> Spark AR </p>
			              	<div className="learnMoreButton" onClick={() => this.setState({uniquirkOpen: true})}>
			              		LEARN MORE
			              	</div>
			             </div>
		            </div>
		          </div>
		        </div>

		        <div class="d-none d-lg-block col-lg-4 col-md-6 portfolio-item">
		          <div class="">
		            <img src={blank} class="img-fluid" alt=""/>
		          </div>
		        </div>

		        <div class="d-none d-lg-block col-lg-4 col-md-6 portfolio-item">
		          <div class="">
		            <img src={blank} class="img-fluid" alt=""/>
		          </div>
		        </div>
		      </div>
		      </div>
		      </Reveal>

		    </div>

		   	<Popup
		        open={this.state.trippyyOpen}
		        closeOnDocumentClick
		        onClose={() => this.setState({trippyyOpen: false})}
	        >	
	        	<div className="popupBox">
		        	<i className='bx bx-window-close crossIcon' onClick={() => this.setState({trippyyOpen: false})}></i>
		        	<div className="popupRow">
		        		<div className="caroBox">
		        			<MyCarousel samples={trippyySamples}/>
		        		</div>

		        		<div className="textBox">
		        			<h3> Trippyy </h3>
		        			<p> A travel web application using ReactJS, Redux, and Django that integrates algorithms to automatically suggest convenient and well-thought-out itineraries which are optimised in terms of geo-convenience, time, and costs based on user input.</p>
		        			<p> An ongoing project, and aspiring to add more features as travel unfolds again. </p>
		        			<p> Developed in the summer of 2019. </p>
		        			<p> View the project demo {<a href="https://youtu.be/bDtzUbDFLvY" target="_blank"> here! </a>} </p>
		        			<h4> STACK USED: </h4>
		        			<li> ReactJS </li>
		        			<li> Redux </li>
		        			<li> Django-REST </li>
		        		</div>
		        	</div>
	        	</div>
	        </Popup>

		   	<Popup
		        open={this.state.wsgOpen}
		        closeOnDocumentClick
		        onClose={() => this.setState({wsgOpen: false})}
	        >	
	        	<div className="popupBox">
		        	<i className='bx bx-window-close crossIcon' onClick={() => this.setState({wsgOpen: false})}></i>
		        	<div className="popupRow">
		        		<div className="caroBox">
		        			<MyCarousel samples={wsgSamples}/>
		        		</div>

		        		<div className="textBox">
		        			<h3> WSG Newsletter </h3>
		        			<p> A HTML email newsletter created in collaboration with Workforce Singapore, to educate Singaporean businesses about new govermental initiatives</p>
		        			<p> Developed mobile and desktop responsive HTML emails using HTML with inline CSS, to ensure compatibility across all email servers </p>
		        			<h4> STACK USED: </h4>
		        			<li> HTML (inline CSS) </li>
		        		</div>
		        	</div>
	        	</div>
	        </Popup>

		   	<Popup
		        open={this.state.uniquirkOpen}
		        closeOnDocumentClick
		        onClose={() => this.setState({uniquirkOpen: false})}
	        >	
	        	<div className="popupBox">
		        	<i className='bx bx-window-close crossIcon' onClick={() => this.setState({uniquirkOpen: false})}></i>
		        	<div className="popupRow">
		        		<div className="caroBox">
		        			<MyCarousel samples={uniquirkSamples}/>
		        		</div>

		        		<div className="textBox">
		        			<h3> UNIQUIRK FILTERS </h3>
		        			<p> Development of Instagram filters using Instagram's SPARK AR and JS scripts to spread exposure of a local social media agency, UNIQUIRK.</p>
		        			<p> Past works include short games, aesthetic filters and "fortune-telling" filters.</p>
		        			<p> Achieved outreach of ~20k impressions through Instagram filters. </p>
		        			<h4> STACK USED: </h4>
		        			<li> SPARK AR </li>
		        			<li> JAVASCRIPT </li>
		        		</div>
		        	</div>
	        	</div>
	        </Popup>

		   	<Popup
		        open={this.state.scdfOpen}
		        closeOnDocumentClick
		        onClose={() => this.setState({scdfOpen: false})}
	        >	
	        	<div className="popupBox">
		        	<i className='bx bx-window-close crossIcon' onClick={() => this.setState({scdfOpen: false})}></i>
		        	<div className="popupRow">
		        		<div className="caroBox">
		        			<MyCarousel samples={scdfSamples}/>
		        		</div>

		        		<div className="textBox">
		        			<h3> Singapore Civil Defence Force (Save-A-Life Initiative) </h3>
		        			<p> Developed a full stack campaign website for SCDF using to promote the launch of a new mobile
application (myResponders) from the Save-A-Life initiative.</p>
		        			<p> The website enabled Singaporeans to learn more about the initiative and take part in
promotional contests related to the initiative.</p>
		        			<h4> STACK USED: </h4>
		        			<li> REACTJS </li>
		        			<li> FIREBASE </li>
		        		</div>
		        	</div>
	        	</div>
	        </Popup>
		  </section>
       );
  }
}

export default AboutMe;
