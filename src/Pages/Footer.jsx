// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------

import './Page.css';

class Footer extends Component{
  render() {
      return (
        <footer id="footer">
          <div class="container">
            <h3>LI XUPENG</h3>
            <p>Thank you for reaching the end of my portfolio. Feel free to contact me to find out more!</p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/lixupeng" target="_blank" class="instagram"><i class="bx bxl-linkedin"></i></a>
              <a href="https://github.com/pongzers" target="_blank" class="linkedin"><i class="bx bxl-github"></i></a>
            </div>
          </div>
        </footer>
       );
  }
}

export default Footer;
