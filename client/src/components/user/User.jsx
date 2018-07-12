import React, { Component } from 'react';
import UserForm from '../includes/UserForm';

export default class User extends Component {
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

    handleLogin = (e) => {
        e.preventDefault()
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
    handleRegister = (e) => {
        e.preventDefault()
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
        .then(response => {
            console.log(response);
            if(response.success) {
                this.props.history.push("/");
            }
        })
    }   
    render() {
        return (
            this.props.login ? 
            (<UserForm isRegister={false} submitHandler={this.handleLogin} handleChange={this.handleChange} />) :

            (<UserForm isRegister={true} submitHandler={this.handleRegister} handleChange={this.handleChange} />) 
        )
    }
}