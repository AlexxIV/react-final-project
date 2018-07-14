import React, { Component } from 'react'
import Button from './simple/Button';

export default class HotelForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="input-hotel-name">Hotel Name</label>
                    <input data-name="name" type="name" onChange={this.props.handleChange} className="form-control" id="input-hotel-name" placeholder="Hotel Name" defaultValue={this.props.hotel.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-hotel-description">Hotel Decription</label>
                    <input data-name="description" type="description" onChange={this.props.handleChange} className="form-control" id="input-hotel-description" placeholder="Hotel Description" defaultValue={this.props.hotel.description} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-hotel-imageUrl">Hotel Image</label>
                    <input data-name="imageUrl" type="imageUrl" onChange={this.props.handleChange} className="form-control" id="input-hotel-imageUrl" placeholder="Hotel Image" defaultValue={this.props.hotel.imageUrl} />
                </div>
                {this.props.cancleBtn ?
                    <Button clickFunction={this.props.cancleBtnFn} class={'btn-default'} text={'CANCEL'}/>
                    : null}
                <Button type={'submit'} class={'btn-primary'} text={this.props.btnText} />
            </form>
        )
    }
}