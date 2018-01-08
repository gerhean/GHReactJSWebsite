import React, { Component } from 'react';
import './App.css';
import Header from "./header/Header";
import {Home, About, Contact, Acheivements, ErrorPage, Game} from "./main/mainIndex";

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
	    case 'Game':
	      return <Game />;
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
