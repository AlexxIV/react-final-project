import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import '../../styles/common/navigation.scss';
import WelcomeBar from './WelcomeBar';
import Weather from '../includes/Weather/Weather';

export default class Navigation extends Component{
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" className="img-fluid"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/hotels" exact activeClassName="active">Hotels</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tracks" exact activeClassName="active">SkiTracks</NavLink>
                        </li>
                        </ul>
                        <WelcomeBar {...this.props}/>
                    </div>
                </nav>
            </header>
        )
    }
}







