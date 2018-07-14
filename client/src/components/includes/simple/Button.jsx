import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.clickFunction ?
                (<button onClick={this.props.clickFunction} className={'btn ' + this.props.class}>{this.props.text}</button>)
                : this.props.type === 'link' ?
                    (<Link to={this.props.dest} className={'btn ' + this.props.class}>{this.props.text}</Link>)
                    : (<button type={this.props.type} className={'btn ' + this.props.class}>{this.props.text}</button>)
        )
    }
}
