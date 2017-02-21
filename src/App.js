import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Body />
      </div>
    );
  }
}

export default App;
