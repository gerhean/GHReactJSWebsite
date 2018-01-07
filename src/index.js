'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//registerServiceWorker();



// Split location into `/` separated parts, then render `Application` with it
function handleNewHash() {
  var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
  //console.log(location)
  ReactDOM.render(<App location={location[0]} />, document.getElementById('react-app'));
}

// Handle the initial route and browser navigation events
handleNewHash()
window.addEventListener('hashchange', handleNewHash, false);