import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/includes/hotel.scss';
import AdminPanel from '../includes/AdminPanel'

export default class DrawHotel extends React.Component {
    render() {
        return (
            
                this.props.hotel ? (
                    <div className="col-sm-6" >
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src={this.props.hotel.imageUrl} alt="Hotel" />
                                <h5>{this.props.hotel.name}</h5>
                                <p>{this.props.hotel.description}</p>
                                {this.props.link ? <Link to={"/hotels/" + this.props.hotel._id}>Details</Link>
                                    : null}
                            </div>
                        </div>
                        {this.props.isAdmin && !this.props.link ? <AdminPanel {...this.props} />
                            : null}
                    </div>
                )
                    : null
            
        )
    }
}
