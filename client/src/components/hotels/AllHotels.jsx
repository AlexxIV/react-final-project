import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/includes/hotel.scss';

export default class AllHotels extends React.Component {
    render() {
        return (
            this.props.hotels.map(hotel => (
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <img class="card-img-top" src={hotel.imageUrl} alt="Hotel" />
                            <h5>{hotel.name}</h5>
                            <p>{hotel.description}</p>
                            <Link to={"/hotels/" + hotel._id}>Details</Link>
                        </div>
                    </div>
                </div>
            ))
        );
    }
}
