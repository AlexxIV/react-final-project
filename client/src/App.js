import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import User from './components/user/User';
import Logout from './components/user/Logout';
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
      userToken: null,
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
            isAdmin: response.user.isAdmin,
            userToken: userToken
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
    handleLogOut = () => {
      this.setState({
        username: 'Guest',
        loggedIn: false,
        isAdmin: false
      })
    }
  render() {
    return (
        <div className="App container">
          <Navigation {...this.state} />
          <Route path='/login' 
            render={(props) => <User {...props} updateUserState={this.updateUserState} login={true}/>} />
          <Route path='/register' 
            render={(props) => <User {...props} login={false} />} />
          <Route path='/logout' render = {() => (
            <Logout handleLogOut={this.handleLogOut}/>
          )} />
          <MainContent {...this.state} />
          <Footer />
        </div>
    );
  }
}

export default App;
