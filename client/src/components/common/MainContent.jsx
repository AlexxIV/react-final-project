import React, { Component } from 'react';
import HotelsIndex from '../hotels/HotelsIndex';
import Carousel from '../includes/Carousel';
import { Route } from 'react-router-dom';

export default class MainContent extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Route path='/hotels' 
                    render = {(props) => (
                        <HotelsIndex {...props} />
                    )} />
            </div>
        )
    }
}