import React, { Component } from 'react';

export default class UnAuth extends Component {
    render = () => {
        return (
            <h1>Hi there React user</h1>
        )
    }

    // componentDidMount = () => {
    //    fetch('http://localhost:9999')
    //     .then(rawData => rawData.json())
    //     .then(users => console.log(users))
    // }

    // render = () => (
    //     <ul>
    //         {this.state.users.map(user => (
    //             <li key={user._id}>
    //                 <span>{this.user.name}</span>
    //             </li>
    //         ))}
    //     </ul>
    // )


}