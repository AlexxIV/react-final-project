import React, { Component } from 'react';

export default class UserForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
            <div className="form-group">
                <label htmlFor="input-username">Username</label>
                <input data-name="username" type="username" onChange={this.props.handleChange} className="form-control" id="input-username" placeholder="Enter Username" />
            </div>
            <div className="form-group">
                <label htmlFor="input-password">Password</label>
                <input data-name="password" type="password" onChange={this.props.handleChange} className="form-control" id="input-password" placeholder="Password" />
            </div>
            {this.props.isRegister ? 
            <div className="form-group">
                <label htmlFor="input-repeat-password">Repeat password</label>
                <input data-name="repeatPassword" type="password" onChange={this.props.handleChange} className="form-control" id="input-repeat-password" placeholder="Repeat Password" />
            </div>
            : null
            }
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}