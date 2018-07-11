import React, { Component } from 'react';
import fetcher from '../../utilities/fetcher';

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
        fetch('http://localhost:5000/auth/signup', 
            {  
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(data => data.json())
        .then(response => console.log(response))
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
            <div className="form-group">
                <label for="input-repeat-password">Repeat password</label>
                <input data-name="repeatPassword" type="password" onChange={this.handleChange} className="form-control" id="input-repeat-password" placeholder="Repeat Password" />
            </div>
            <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        )
    }
}