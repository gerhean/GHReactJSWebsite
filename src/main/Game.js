'use strict';
import React from 'react';
import './App.css';


function Game(props) {
  return (
  	<div className="iframediv">
  	<h1>Heres a fun game!</h1>
    <iframe src="./Space_shooter.html" title="Space_shooter" frameborder="0"></iframe>
    </div>
  );
}


export default Game;
