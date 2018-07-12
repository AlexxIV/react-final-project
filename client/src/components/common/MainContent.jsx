import React, { Component } from 'react';
import HotelsIndex from '../hotels/HotelsIndex';
import Carousel from '../includes/Carousel';
import { Route } from 'react-router-dom';
import '../../styles/common/main.scss';

export default class MainContent extends Component{
    render() {
        return (
            <div className="main-content-area">
                <Route path='/hotels' 
                    render = {(routerProps) => (
                        <HotelsIndex {...routerProps} {...this.props} />
                    )} />
                <Route exact path='/' render= {() => (<h1>AZIS</h1>)} />
            </div>
        )
    }
}