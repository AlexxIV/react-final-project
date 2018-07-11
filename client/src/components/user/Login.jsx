import React, { Component } from 'react';

export default class Login extends Component {
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
        fetch('http://localhost:5000/auth/login',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(data => data.json())
        .then(response => {
            console.log(response);
            if (response.success && response.token) {
                localStorage.setItem('token', response.token);
                this.props.updateUserState(response.user);
                this.props.history.push("/");
            }
        })
        .catch (err => console.log(err))
    }   
    render() {
        return (
            <form>
            <div className="form-group">
                <label for="input-username">Email address</label>
                <input data-name="username" type="username" onChange={this.handleChange} className="form-control" id="input-username" placeholder="Enter Username" />
            </div>
            <div className="form-group">
                <label for="input-password">Password</label>
                <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="input-password" placeholder="Password" />
            </div>
            <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        )
    }
}