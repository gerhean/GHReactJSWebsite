'use strict';
import React from 'react';
import './App.css';
import Recruit from "./../images/AxisCultRecruit.jpg"

function About(props) {
  return (
  	<div>
    <h2>This webpage is made with React js.</h2>
    <a href="https://github.com/gerhean/FirstReactJSWebsite"><h3>GitHub Source</h3></a>
    <br/>
    <h1>PRAISE AQUA</h1>
    <p>The Axis Order is a movement working together to benefit the world through a community of people of one mind and vision.</p>
    <h1>Please join the Axis Cult!</h1>
    <a href="http://axisorder.com/">
    <img src={Recruit} alt="We Want You!"/>
    </a>
    </div>
  );
}


export default About;
