import React from 'react';
import './App.css';
import diaImg from "./../images/butItWasMeDia.png"


function ErrorPage(props) {
  return (
  	<div>
    <p className="App-intro">
      You probably expected a hidden webpage, but
    </p>
    <img src={diaImg} alt="There's nothing here"/>
    </div>
  );
}

export default ErrorPage;
