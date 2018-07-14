import React, { Component } from 'react';
import Track from './Track';

export default class TracksIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/tracks/all')
        .then(rawData => rawData.json())
        .then(processedData => this.setState({tracks: processedData.tracks}))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {this.state.tracks.map((track, index) => <Track key={index} track={track} {...this.props} />)}
            </div>
        );
      }
}