import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from "./header/Header";
import Home from "./main/Home";
import About from "./main/About";
import Contact from "./main/Contact";
import Acheivements from "./main/Acheivements";
import ErrorPage from "./main/ErrorPage";

function Main(props) {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Acheivements' component={Acheivements}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/' component={ErrorPage}/>
    </Switch>
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
