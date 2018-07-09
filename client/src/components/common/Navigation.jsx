import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import '../../styles/common/navigation.scss';
import WelcomeBar from './WelcomeBar';

export default class Navigation extends Component{
    
    // <div id="logo-box">
    //                 <img src={Logo} alt="Logo" className="img-fluid"/>
    //             </div>
    //             <div id="main-nav">
    //                 <NavLink className='nav' to='/'>Home</NavLink>
    //             </div>
    //             <div id="login-nav">
    //                 <span>Welcome</span>
    //                 <NavLink className='nav' to='/login'>Login</NavLink>
    //                 <NavLink className='nav' to='/register'>Register</NavLink>
    //             </div> 

    render() {
        return (
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" className="img-fluid"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown03">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        </ul>
                        <WelcomeBar />
                    </div>
                </nav>
        )
    }
}







