// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------
import SingleProject from '../Components/SingleProject.jsx'
import trippyy from '../Assets/trippyy.PNG'
import wsg from '../Assets/WSG.png'
import scdf from '../Assets/scdf.png'
import uniquirk from '../Assets/uniquirk.png'

import './Page.css';

class Resume extends Component{

	render() {
	    return <section id="resume" class="resume">
	      <div class="container" data-aos="fade-up">

	        <div class="section-title">
	          <h2 class="resume-title">Resume</h2>
	        </div>

	        <div class="row">
	          <div class="col-lg-6">
	            <h3 class="resume-title">Summary</h3>
	            <div class="resume-item pb-0">
	              <h4>LI XUPENG</h4>
	              <p><em>Always excited to start on new projects, an astute thinker who is driven in catalysing improvements in current systems, while gaining insights from peers and seniors of different expertise. 
	              A current Computer Science major, deeply interested in further developing full stack skillsets. </em></p>
	              <ul>
	                <li>(+65) 93898691</li>
	                <li>li.xupeng@u.nus.edu</li>
	              </ul>
	            </div>

	            <h3 class="resume-title">Education</h3>
	            <div class="resume-item">
	              <h4>Bachelor of Computing (Honours) in Computer Science</h4>
	              <h5>Aug 2019 - Present</h5>
	              <p><em>National University of Singapore</em></p>
	              <p>Expected Graduation: May 2023</p>
	            </div>
	            <div class="resume-item">
	              <h4>Singapore-Cambridge General Certificate of Education Advanced Level</h4>
	              <h5>Jan 2015 - Dec 2016</h5>
	              <p><em>Nanyang Junior College</em></p>
	            </div>
	          </div>
	          <div class="col-lg-6">
	            <h3 class="resume-title">Experience</h3>
	            <div class="resume-item">
	              <h4>Teaching Assistant</h4>
	              <h5>Jul 2020 - Present</h5>
	              <p><em>National University of Singapore </em></p>
	              <ul>
	                <li>Teaching assistant for CS1101S Programming Methodology, a rigorous and thorough introduction to programming and programming methodology for NUS Computer Science students.</li>
	                <li>Responsible for the conduct of tutorials and grading of assignments.</li>
	              </ul>
	            </div>
	            <div class="resume-item">
	              <h4>Risk Assurance and Regulations Compliance Intern</h4>
	              <h5>Mar 2019 - Aug 2019</h5>
	              <p><em>PricewaterhouseCoopers Singapore</em></p>
	              <ul>
	                <li>Automated Excel procedures to extract data via writing scripts with Excel VBA, increasing efficiency in handling large volumes of insurance cases</li>
	                <li>Conceptualized and streamlined documentation workflow during project infancy
stage with a client Insurance company in order to accurately meet compliance
regulations, set out by the Monetary Authority of Singapore (MAS)</li>
	                <li>Spearheaded analysis and consolidation of data required for ad-hoc reports and
projects</li>
	              </ul>
	            </div>
	           	<div class="resume-item">
	              <h4>Sales Support Intern</h4>
	              <h5>Nov 2018 - Mar 2019</h5>
	              <p><em>Panalpina Singapore</em></p>
	              <ul>
	                <li>Automated Excel procedures to create quotations via writing scripts with Excel VBA,
improving efficiency of day to day operations</li>
	                <li>Responsible for pricing analysis and generated quotations for SME businesses</li>
	                <li>Assisted Business Development Managers and Key Account Managers with new and
existing businesses and joined on business meetings </li>
	              </ul>
	            </div>
	          </div>
	        </div>

	      </div>
	    </section>
	}

 }
 export default Resume;