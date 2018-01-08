'use strict';
import React from 'react';
import './App.css';
// import Recruit from "./../images/AxisCultRecruit.jpg"

function About(props) {
  return (
  	<div>
    <h2>This webpage is made with React js.</h2>
    <a href="https://github.com/gerhean/FirstReactJSWebsite"><h3>GitHub Source</h3></a>
    <br/>
    <h3><a href="https://github.com/gerhean/">Link</a> to my GitHub page for those interested</h3>
    <br/>
    <h2>About Me:</h2>
    <div className="abtTxt">
    <p>The author has recently completed his A levels and graduated from high school. As of now, he is still waiting for his results to be released, and will be applying to 
    enter university soon after. Although he is searching for a job now, deep down in his heart he knows
    that all he actually wants to do is just laze around at home and play/make games, and read manga. </p> 
    </div>
    <div className="abtTxt">
    <p>The author is currently also learning Unity and reactjs</p>
    </div>
    </div>
  );
}

/*
<h1>PRAISE AQUA</h1>
    <p>The Axis Order is a movement working together to benefit the world through a community of people of one mind and vision.</p>
    <h1>Please join the Axis Cult!</h1>
    <a href="http://axisorder.com/">
    <img src={Recruit} alt="We Want You!"/>
    </a>
*/

export default About;
