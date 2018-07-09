import React, { Component } from 'react';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import './App.css';

import UnAuth from './components/home/UnAuth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;
