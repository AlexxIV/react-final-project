import React from 'react';
import DrawHotel from './DrawHotel';
import '../../styles/includes/hotel.scss';

export default class AllHotels extends React.Component {
    render() {
        return (
            this.props.hotels.map((hotel, index) => (
              <DrawHotel key={index} link={true} hotel={hotel} {...this.props} />  
            ))
        );
    }
}
