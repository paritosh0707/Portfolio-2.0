import React from 'react';
import './Intro.css'
import intro_image from "../Assets/DP.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="image-container">
        <img src={intro_image} alt="" />
      </div>

      <div className="intro-container">
        <p>Data Scientist || Generative AI Engineer</p>
        <h1>Paritosh Sharma</h1>
        <div className="about-me">
          Experienced Data Scientist with 2+ years of expertise in Generative
          AI, Machine Learning and Deep Learning. Skilled in translating data
          into actionable insights and developing production-ready solutions
          using ML-Ops tools. Passionate about driving innovation in the dynamic
          technology landscape.
        </div>

        <div className="button-containers">
        <div className="button-container">
          <button>Download CV</button>
          <button>Contacts</button>
        </div>
        </div>

      
      </div>
    </div>
  );
};

export default Intro
