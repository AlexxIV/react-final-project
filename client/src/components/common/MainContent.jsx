import React, { Component } from 'react';
import HotelsIndex from '../hotels/HotelsIndex';
import TracksIndex from '../tracks/TracksIndex';
import Carousel from '../includes/Carousel';
import { Route, Redirect, Switch } from 'react-router-dom';
import '../../styles/common/main.scss';

export default class MainContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latestHotels: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/hotels/latest')
            .then(rawData => rawData.json())
            .then(processedData => this.setState({ latestHotels: processedData.hotels }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Switch>
                <Route path='/tracks'
                    render={(routerProps) => (
                        this.props.loggedIn ? <TracksIndex {...routerProps} {...this.props} />
                            : <Redirect to="/login" />
                    )} />
                <Route path='/hotels'
                    render={(routerProps) => (
                        this.props.loggedIn ? <HotelsIndex {...routerProps} {...this.props} />
                            : <Redirect to="/login" />
                    )} />
                <Route exact path='/'
                    render={(routerProps) => (
                        <div>
                            <h1 className="main-title">Welcome to SoftUni Winter Resort</h1>
                            <Carousel {...this.state} {...routerProps} {...this.props} />
                        </div>
                    )} />
            </Switch>
        )
    }
}