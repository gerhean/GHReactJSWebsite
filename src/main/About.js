import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import Header from "./header/Header";


function Main(props) {
  return (
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
