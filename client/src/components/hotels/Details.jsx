import React from 'react';
import DrawHotel from './DrawHotel';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel: {}
        }
    }
    componentDidMount() {
        this.setState({
            hotel: this.props.hotel
        })
    }
    render() {
        return (
                <DrawHotel link={false} hotel={this.state.hotel} {...this.props} />
        )
    }
}