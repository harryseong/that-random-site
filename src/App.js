import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import photo from './that-random-site.jpg'
import DadJokes from "./components/dad-jokes/DadJokes";

class App extends Component {
    render() {
    return (
      <div className="App">
        <header className="App-header">
            <div>
                HEY, IT'S THAT RANDOM SITE
            </div>
            <img src={photo} alt="that-random-site" className="random-photo"/>
            <DadJokes/>
        </header>
      </div>
    );
  }
}

export default App;
