import React from 'react';
import AllHotels from './AllHotels';
import Details from './Details';
import { Route, Switch } from 'react-router-dom';

export default class HotelsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        }
    }
    handleDelete = (id) => {
        this.setState({
            hotels: this.state.hotels.filter((hotel) => { 
                return hotel._id !== id
            })
        })
    }
    handleEdit = (updatedHotel) => {
        this.setState({
            hotels: this.state.hotels.map(hotel => hotel._id === updatedHotel._id ? updatedHotel : hotel)
        })
    }
    
    handleAdd = (newHotel) => {
        this.setState(prevState => ({
            
            hotels: [...prevState.hotels, newHotel]
        }))
    }
    
    componentDidMount() {
        fetch('http://localhost:5000/hotels/all')
        .then(rawData => rawData.json())
        .then(processedData => this.setState({hotels: processedData.hotels}))
        .catch(err => console.log(err))
    }
  render() {
    return (
        <div className="row">
            <Switch>
                <Route exact path='/hotels'
                render = {(routerProps) => (<AllHotels {...routerProps} hotels={this.state.hotels} {...this.props} handleAdd={this.handleAdd} /> )} />
                <Route 
                    exact path='/hotels/:hotelId'
                    render = {(props) => (
                        <Details 
                            hotel={this.state.hotels.find(hotel => 
                                hotel._id === props.match.params.hotelId
                            )} {...this.props} handleDelete={this.handleDelete} handleEdit={this.handleEdit}
                        /> 
                    )} 
                />
            </Switch>
        </div>
    );
  }
}
