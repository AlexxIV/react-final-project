import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Footer from './components/common/Footer';
import MainContent from './components/common/MainContent';
import './styles/App.scss';



class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navigation />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        {/* <MainContent /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
