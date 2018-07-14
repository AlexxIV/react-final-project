import React, { Component } from 'react';
import UserForm from '../includes/UserForm';
import Error from '../common/Error';
import '../../styles/includes/user.scss';

export default class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {},
            error: {
                show: false,
                text: ''
            }
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
                    this.props.updateUserToken(response.token);
                    this.props.history.push("/");
                }
                else {
                    this.setState({
                        error: {
                            show: true,
                            text: "Invalid credentials"
                        }
                    })
                }
            })
            .catch(err => console.log(err))
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
                if (response.success) {
                    this.props.history.push("/");
                }
                else {
                    this.setState({
                        error: {
                            show: true,
                            text: 'Error with register fields'
                        }
                    })
                }
            })
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-9 forms">
                    {this.props.login ?
                        (
                            <div>
                                <UserForm isRegister={false} title={'Login'} submitHandler={this.handleLogin} handleChange={this.handleChange} />
                                {this.state.error.show ? <Error error={this.state.error.text}/>
                                    : null}
                            </div>

                        )


                        : (
                            <div>
                                <UserForm isRegister={true} title={'Register'} submitHandler={this.handleRegister} handleChange={this.handleChange} />
                                {this.state.error.show ? <Error error={this.state.error.text} />
                                    : null}
                            </div>
                        )
                    }
                </div>
            </div>

        )
    }
}