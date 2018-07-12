import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        localStorage.removeItem('token')
        this.props.handleLogOut()
    }
    render() {
        return (
            <Redirect to="/" />
        )
    }
}