import React, { Component } from 'react';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {}
        };
    }
    handleChange = (e) => {
        const name = e.target.dataset.name;
        const value = e.target.value;
        const newObj = {};
        newObj[name] = value;
        console.log(name, value);
        this.setState({
            form: Object.assign(this.state.form, newObj)
        });
    }

    handleSubmit = (e) => {
        fetch('http')
    }
    render() {
        return (
            <form>
            <div className="form-group">
                <label for="inputUsername">Email address</label>
                <input data-name="username" type="username" onChange={this.handleChange} className="form-control" id="input-username" placeholder="Enter Username" />
            </div>
            <div className="form-group">
                <label for="inputPassword">Password</label>
                <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="input-password" placeholder="Password" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Repeat password</label>
                <input data-name="passwordRepeat" type="password" onChange={this.handleChange} className="form-control" id="input-passwordRepeat" placeholder="Repeat Password" />
            </div>
            <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        )
    }
}