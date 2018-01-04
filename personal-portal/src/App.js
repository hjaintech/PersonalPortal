import React, { Component } from 'react';
import SavedLinks from './component/SavedLinks/SavedLinks';
import Navbar from './component/Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SavedLinks />
      </div>
    );
  }
}

export default App;
