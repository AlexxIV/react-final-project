import React, { Component } from 'react';
import HotelForm from './HotelForm';
import Error from '../common/Error';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: this.props.hotel.name,
                description: this.props.hotel.description,
                imageUrl: this.props.hotel.imageUrl
            },
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
    handleEdit = (e) => {
        e.preventDefault()
        const url = 'http://localhost:5000/hotels/edit/' + this.props.id;
        const authHeader = 'Bearer ' + this.props.userToken

        console.log(JSON.stringify(this.state.form));

        fetch(url, {
            method: "POST",
            body: JSON.stringify(this.state.form),
            headers: {
                "Authorization": authHeader,
                'Content-Type': 'application/json'
            }
        })
            .then(rawData => rawData.json())
            .then(processedData => {
                if (processedData.success) {
                    this.props.handleEdit(processedData.updatedHotel);
                    this.props.hideForm();
                    this.props.history.push("/hotels/" + processedData.updatedHotel._id);
                }
                else {
                    this.setState({
                        error: {
                            show: true,
                            text: "Hotel name already exists!"
                        }
                    })
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <HotelForm cancleBtn={true} cancleBtnFn={this.props.hideForm} hotel={this.props.hotel} handleSubmit={this.handleEdit} handleChange={this.handleChange} btnText={'Edit'} />
                {this.state.error.show ?
                    <Error error={this.state.error.text} />
                    : null
                }
            </div>
        )
    }
}