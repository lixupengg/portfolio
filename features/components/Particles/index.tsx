// Basic Imports
import React, { Component, Fragment } from "react";
// import Particles as Component from 'react-tsparticles';
// -------------------------------------------------------------------------

import styles from "./index.module.scss";

interface ParticlesInterface {
  icon: string;
}

const Particles = (props: ParticlesInterface) => {
  const { icon } = props;
    return (
        <>
          <img className={`${styles.musicIcon} ${styles.icon1}`} src={icon} alt="musicIcon1"/>
          <img className={`${styles.musicIcon} ${styles.icon2}`} src={icon} alt="musicIcon2"/>
          <img className={`${styles.musicIcon} ${styles.icon3}`} src={icon} alt="musicIcon3"/>
        </>
      );
}

export default Particles;
