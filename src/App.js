import React, { Component } from 'react';
import './App.css';
import Test from './Test.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Katakana Exercise</h1>
        </header>
        <Test />
      </div>
    );
  }
}

export default App;
