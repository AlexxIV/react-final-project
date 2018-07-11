import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class WelcomeBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.loggedIn && this.props.isAdmin) {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <span className="nav-link">Hello {this.props.username}</span>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/register'>Logout</NavLink>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/login'>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/register'>Register</NavLink>
                    </li>
                </ul>
            )
        }
        
    }
} 

