// Basic Imports
import React, { Component, Fragment } from "react";
// -------------------------------------------------------------------------

import Page from "./Pages/Page.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import Resume from "./Pages/Resume.jsx";
import ContactMe from "./Pages/ContactMe.jsx"
import Skills from "./Pages/Skills.jsx"
import Footer from "./Pages/Footer.jsx"
import Sidebar from "./Components/Sidebar.jsx";
import Particle from "./Components/Particles.jsx";
import MyCarousel from "./Components/MyCarousel.jsx";
import './App.css';


class App extends Component{
  render() {
      return <div class="appContainer">
          <Sidebar/>
          <Page/>
          <Particle/>
          <AboutMe/>
          <Skills/>
          <Resume/>
          <ContactMe/>
          <Footer/>
        </div>;
  }
}

export default App;
