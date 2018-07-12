import React, { Component } from 'react';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: this.props.hotel.name,
                description: this.props.hotel.description,
                imageUrl: this.props.hotel.imageUrl
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
                    console.log('error')
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <form onSubmit={this.handleEdit}>
            <div className="form-group">
                <label htmlFor="input-hotel-name">Hotel Name</label>
                <input data-name="name" type="name" onChange={this.handleChange} className="form-control" id="input-hotel-name" placeholder="Hotel Name"  defaultValue={this.props.hotel.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="input-hotel-description">Hotel Decription</label>
                <input data-name="description" type="description" onChange={this.handleChange} className="form-control" id="input-hotel-description" placeholder="Hotel Description" defaultValue={this.props.hotel.description} />
            </div>
            <div className="form-group">
                <label htmlFor="input-hotel-imageUrl">Hotel Image</label>
                <input data-name="imageUrl" type="imageUrl" onChange={this.handleChange} className="form-control" id="input-hotel-imageUrl" placeholder="Hotel Image" defaultValue={this.props.hotel.imageUrl} />
            </div>
            <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        )
    }
}