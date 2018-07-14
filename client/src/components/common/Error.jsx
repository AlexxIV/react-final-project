import React, { Component } from 'react';
import '../../styles/common/error.scss';

export default class Error extends Component {
    render() {
        return (
            <div className="text-center">
                <p className="error-text">{this.props.error}</p>
            </div>
        )
    }
}