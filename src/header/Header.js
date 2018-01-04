import React, { Component } from 'react';
import logo from './../images/logo.svg';
import './Header.css';


function Header(props){
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <ul>
          <li ><a href="#">Home</a></li>
          <li ><a href="#">News</a></li>
          <li ><a href="#">Contact</a></li>
          <li ><a href="#">About</a></li>
        </ul>
      </header>
    );
};

export default Header;