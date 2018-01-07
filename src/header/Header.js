'use strict';
import React, { Component } from 'react';
import './Header.css';
import akuaSound from './akuaCuteSound0.mp3'

function importAll(r) {
  let images = {};
  // eslint-disable-next-line
  r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
  return images;
}

const akuas = importAll(require.context('./../images/akua', false, /\.(png|jpe?g|svg)$/));

class AkuaAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {frame: 1, pause:false};
    this.playSound = this.playSound.bind(this);
    this.audio= new Audio();
    this.audio.src = akuaSound;
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      400
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  playSound(){
    this.audio.play();
    this.setState({
      frame:1,
      pause:true
    });
  }
  tick() {
  this.setState(function(prevState, props) {
    var tickFrame = prevState.frame;
    if(prevState.pause){return{pause:false}};
    if (tickFrame===2){tickFrame=0}
    else{tickFrame=2};
    return {
      frame: tickFrame
    };
  });
  }
  render() {
    return (
      <img onClick={this.playSound} className="akua" src={akuas[('akua0'+this.state.frame+'.png')]} alt="cuteAkua"/>
    );
  }
}

function Header(props){
    return(
      <header className="App-header">
        <AkuaAnimation />
        <h1 className="App-title">Welcome my webpage!</h1>
        <ul>
          <li><a className="nav_link" href="./">Home</a></li>
          <li><a className="nav_link" href="./#Acheivements">Acheivements</a></li>
          <li><a className="nav_link" href="./#Contact">Contact</a></li>
          <li><a className="nav_link" href="./#About">About</a></li>
        </ul>
      </header>
    );
};

export default Header;