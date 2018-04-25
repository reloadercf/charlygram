import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import NavBar from './components/home/NavBar';
import {Routes} from "./Routes"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Routes/>
      </div>
    );
  }
}

export default App;