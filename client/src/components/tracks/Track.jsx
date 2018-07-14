import React, { Component } from 'react';
import MyMapComponent from '../includes/MyMapComponent';

export default class Track extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-5 ml-auto p-3">
                    <h2>{this.props.track.name}</h2>
                    <p>{this.props.track.description}</p>
                    <p>{this.props.track.difficulty}</p>
                    <p>{this.props.track.lenght}</p>
                </div>
                <div className="col-sm-5 p-3 mr-auto">
                    <MyMapComponent
                    zoom={8}
                    mapLat={this.props.track.coordinates.lat}
                    mapLng={this.props.track.coordinates.lng}
                    markLat={this.props.track.coordinates.lat}
                    markLng={this.props.track.coordinates.lng}
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMl4gm4woHxR7vUY_Q-cutIH2mrSmdtew&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `300px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div className="w-100"></div>
            </div>
        );
      }
}