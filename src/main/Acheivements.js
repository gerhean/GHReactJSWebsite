'use strict';
import React, { Component } from 'react';
import './App.css';

function importAll(r) {
  let images = {};
  // eslint-disable-next-line
  r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
  return images;
};

const acheives = importAll(require.context('./../images/AcheivePics', false, /\.(png|jpe?g|svg)$/));


function Acheivements(props) {
  return (
  	<div className="Acheivediv">
  		<h1 className="AcheiveHead">Here are my Acheivements</h1>
			<AcheiveCard content="SsSection"/>
      <br/>
      <h1>Less impressive stuff I did</h1>
      <div className="abtTxt">
      <p>
      I was once part of my school's infocomm club, but that's to be expected, right?
      I have participated in the DSTA CDDC and NTU Juniors Defender Camp last year, and 
      did Google Code-In and Code Jam in 2016 and 2017. As well as the
      code:XtremeApps Hackerthon in 2016. I have also gotten a Silver for the Singapore infocomm Technology
      Federation Awards, as well as a Gold for the Bebras Challenge.
      </p>
      </div>
  	</div>
  )
}

class AcheiveCard extends Component{
	constructor(props) {
    super(props);
    this.state = {open:false};
    this.toggleContent = this.toggleContent.bind(this);
    this.getContentToggleHeight = this.getContentToggleHeight.bind(this);
  }
  toggleContent(){
    this.setState({
      open: !(this.state.open)
    })
  }
  getContentToggleHeight(){
    if(this.state.open){
      return "block"
    } else {
      return "none"
    }
  }
  render() {
    var contentStyle = { display: this.getContentToggleHeight() };
    return (
      <SsSection toggleContent={this.toggleContent} contentStyle={contentStyle}/>
    );
  }
}

class SsSection extends Component{
  render(){
  return(
  <div className="ssStyle">
    <img src={acheives["ssLogo.png"]} alt="sslogo" onClick={this.props.toggleContent}/>

    <div style={this.props.contentStyle}>
      <p className="AcheiveIntro">
      Social Shield is data-driven browser plugin to protect users on social media platforms
      </p>
      <p className="Acheivep">GitHub Links:</p>
      <p className="Acheivep">Final version: <a className="Acheivep" href="https://github.com/leeweijie/socialshield">https://github.com/leeweijie/socialshield</a></p>
      <p className="Acheivep">Development previous versions (includes only client side): <a className="Acheivep" href="https://github.com/gerhean/SocialShield-Dump">https://github.com/gerhean/SocialShield-Dump</a></p>
      <table className="AcheiveTbl"><tbody>
        <tr>
          <td><img src={acheives["Splash.png"]} alt="splash"/></td>
          <td>1st place in Splash Awards 2016 by Singapore Computer Society, the longest running infocomm competition for students in Singapore</td>
        </tr>
        <tr>
          <td><img src={acheives["NCC.jpg"]} alt="splash"/></td>
          <td>Won 1st place in National Infocomm Club (NIC) Face-Off - App Development 2016, which qualified us for APICTA</td>
        </tr>
      </tbody></table>
    </div>

  </div>
  )}
}

export default Acheivements;
// <p className="App-intro">
//     	I have participated in the DSTA CDDC last year, NTU Juniors Defender Camp 2017, and Google Code Jam and Code-In in 2015 and 2016, although i did not win anything.
// 		I have also worked on the client side portion of a browser extension app which won the National Coding Championship last year.
// 	</p>