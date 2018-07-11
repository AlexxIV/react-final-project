import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Footer from './components/common/Footer';
import MainContent from './components/common/MainContent';
import './styles/App.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      loggedIn: null,
      isAdmin: null,
    }
  }
    componentDidMount = () => {
      const userToken = localStorage.getItem('token')
      if (typeof userToken !== undefined && userToken !== null && userToken !== '') {
      fetch('http://localhost:5000/currentUser',
            {
                headers: {
                    'Authorization': 'Bearer ' + userToken
                }
            }
        )
        .then(data => data.json())
        .then(response => {
          this.setState({
            username: response.user.username,
            loggedIn: true,
            isAdmin: response.user.isAdmin
          })
        })
        .catch (err => console.log(err))
      } else {
        this.setState({
          username: 'Guest',
          loggedIn: false,
          isAdmin: false
        })
      }
    }
   updateUserState = (user) => {
      this.setState({
        username: user.username,
        loggedIn: true,
        isAdmin: user.isAdmin,
      })
    }
  render() {
    return (
        <div className="App container">
          <Navigation isAdmin={this.state.isAdmin} loggedIn={this.state.loggedIn} username={this.state.username} />
          <Route path='/login' 
          render={(props) => <Login {...props} updateUserState={this.updateUserState} />} />
          <Route path='/register' component={Register} />
          <MainContent isAdmin={this.state.isAdmin} loggedIn={this.state.loggedIn} />
          <Footer />
        </div>
    );
  }
}

export default App;
