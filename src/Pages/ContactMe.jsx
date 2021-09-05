// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------
import SingleProject from '../Components/SingleProject.jsx'
import trippyy from '../Assets/trippyy.PNG'
import wsg from '../Assets/WSG.png'
import scdf from '../Assets/scdf.png'
import uniquirk from '../Assets/uniquirk.png'

import mail from '../Assets/message.png'
import network from '../Assets/share.png'
import call from '../Assets/telephone.png'
import pin from '../Assets/pin.png'

import './Page.css';

class ContactMe extends Component{
  render() {
      return (
  <section id="contact" class="contact">
    <div class="container">

      <div class="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
      </div>

      <div class="row mt-2">

        <div class="col-md-6 d-flex align-items-stretch">
          <div class="info-box">
            <i class="logo bx bx-map"></i>
            <h3>My Address</h3>
            <p>1 Hougang Ave 3, SG530001</p>
          </div>
        </div>

        <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div class="info-box">
            <i class="logo bx bx-share-alt"></i>
            <h3>Social Profiles</h3>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/lixupeng" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              <a href="https://github.com/pongzers" target="_blank" class="google-plus"><i class="bx bxl-github"></i></a>
              
            </div>
          </div>
        </div>

        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="logo bx bx-envelope"></i>
            <h3>Email Me</h3>
            <p>li.xupeng@u.nus.edu</p>
          </div>
        </div>
        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="logo bx bx-phone-call"></i>
            <h3>Call Me</h3>
            <p>+65 93898691</p>
          </div>
        </div>
      </div>
    </div>
  </section>
       );
  }
}

export default ContactMe;
