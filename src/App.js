import React, { Component } from 'react';
import './App.css';
import Header from "./header/Header";
import Home from "./main/Home";
import About from "./main/About";
import Contact from "./main/Contact";
import Acheivements from "./main/Acheivements";
import ErrorPage from "./main/ErrorPage";

class Main extends Component { 
  render(){
	  switch (this.props.location)  {
	    case '':
	      return <Home />;
	    case 'Acheivements':
	      return <Acheivements />;
	    case 'Contact':
	      return <Contact />;
	    case 'About':
	      return <About />;
	    default:
	      return <ErrorPage />;
	  }
	}
}

class App extends Component {
  render() {
  	console.log(this.props.location)
    return (
      <div className="App">
        <Header />
        <Main location={this.props.location}/>
      </div>
    );
  }
}

export default App;
