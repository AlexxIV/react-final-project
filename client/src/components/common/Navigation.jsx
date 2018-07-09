import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';

export default class Navigation extends Component{
    render() {
        return (
            <div>
                <div id="logo-box">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div id="main-nav">
                    <NavLink className='nav' to='/'>Home</NavLink>
                </div>
                <div id="login-nav">
                    <span>Welcome</span>
                    <NavLink className='nav' to='/login'>Login</NavLink>
                    <NavLink className='nav' to='/register'>Register</NavLink>
                </div>
            </div>
        )
    }
}