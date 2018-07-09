import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class WelcomeBar extends Component{

    render() {
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

