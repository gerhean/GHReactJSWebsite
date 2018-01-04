import React from 'react';
import logo from './../images/logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props){
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <ul>
          <li ><Link className="nav_link" to="/">Home</Link></li>
          <li ><Link className="nav_link" to="/News">News</Link></li>
          <li ><Link className="nav_link" to="/Contact">Contact</Link></li>
          <li ><Link className="nav_link" to="/About">About</Link></li>
        </ul>
      </header>
    );
};

export default Header;