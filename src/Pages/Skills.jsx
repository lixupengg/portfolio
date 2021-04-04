// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------
import Reveal from 'react-reveal/Reveal';
import './Page.css';


const mystyle = {
  width: '70%'
}
class Skills extends Component{
  render() {
      return (
<section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p>These are rough indicators of my proficiency in the various web development tools, frameworks and programming languages.</p>
        </div>

        <div className="row skills-content">
        <Reveal effect="animate__animated animate__fadeInLeft animate__faster">
            <div className="col-lg-6">
                <h4> Web Development Tools </h4>
                <div className="progress">
                  <span className="skill">ReactJS <i className="val">85%</i></span>
                  <div className="progress-bar-wrap">
                    <div style={{width: '85%'}} className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Redux <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div style={{width: '85%'}} className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Django <i className="val">60%</i></span>
                  <div className="progress-bar-wrap">
                    <div style={{width: '60%'}} className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Flask <i className="val">25%</i></span>
                  <div className="progress-bar-wrap">
                    <div style={{width: '25%'}} className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">PostgreSQL <i className="val">85%</i></span>
                  <div className="progress-bar-wrap">
                    <div style={{width: '85%'}} className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">Bootstrap <i className="val">50%</i></span>
                  <div className="progress-bar-wrap">
                    <div style={{width: '50%'}} className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
            </div>
          </Reveal>

          <Reveal effect="animate__animated animate__slideInRight animate__faster">
          <div className="col-lg-6">

            <h4> Programming Languages </h4>
            <div className="progress">
              <span className="skill">Javascript <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div style={{width: '90%'}} className="progress-bar progress-bar-green" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Java <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div style={{width: '90%'}} className="progress-bar progress-bar-green" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Python <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div style={{width: '75%'}} className="progress-bar progress-bar-green" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">C <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <div style={{width: '60%'}} className="progress-bar progress-bar-green" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">HTML5 <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div style={{width: '90%'}} className="progress-bar progress-bar-green" role="progressbar " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div style={{width: '85%'}} className="progress-bar progress-bar-green" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          </Reveal>

        </div>

      </div>
    </section>
       );
  }
}

export default Skills;
