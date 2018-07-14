import React from 'react';
import DrawHotel from './DrawHotel';
import Button from '../includes/simple/Button';
import '../../styles/includes/hotel.scss';
import '../includes/simple/Button';
import HotelForm from '../includes/HotelForm';
import Error from '../common/Error';

export default class AllHotels extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAdd: false,
            form: {
                    name: '',
                    imageUrl: '',
                    description: '',
                    totalRating: 0,
                    ratingsCount: 0
            },
            hotel: {
                name: '',
                imageUrl: '',
                description: ''
            },
            error: {
                show: false,
                text: ''
            }
        }
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

    handleAdd = () => {
        this.setState({
            showAdd: !this.state.showAdd
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const url = 'http://localhost:5000/hotels/add';
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
                    this.props.handleAdd(processedData.newHotel);
                    this.handleAdd();
                    this.props.history.push('/hotels');
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
            <div className="row">
                <div className="col-sm-12 text-right">
                    <Button clickFunction={this.handleAdd} class={'btn-primary'} text={'Add New Hotel'} />
                    <div className="col-sm-6 ml-auto">
                    {this.state.showAdd ?
                        <div>
                            <HotelForm  cancleBtn={true} cancleBtnFn={this.handleAdd} handleSubmit={this.handleSubmit} handleChange={this.handleChange} hotel={this.state.hotel} btnText={'ADD'}/>
                            {this.state.error.show ? 
                            <Error error={this.state.error.text}/>
                            : null
                            }
                        </div>
                        : null
                    }
                    </div>

                </div>
                {this.props.hotels.map((hotel, index) => (
                    <DrawHotel key={index} link={true} hotel={hotel} {...this.props} />
                ))}
            </div>
        );
    }
}
