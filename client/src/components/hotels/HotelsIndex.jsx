import React from 'react';
import AllHotels from './AllHotels';
import Details from './Details'
import { Route, Switch } from 'react-router-dom';

export default class HotelsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        }
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
                render = {() => (<AllHotels hotels={this.state.hotels} /> )} />
                <Route exact path='/hotels/:hotelId'
                render = {(props) => (<Details hotels={this.state.hotels} {...props} /> )} />
            </Switch>
        </div>
        //     <Route exact path='/hotels/all' 
        //         render = {() => (this.state.hotels.map((hotel, index) => <Hotel  key={index} hotel={hotel} />)
        //     )} />
        //     <Route path='/hotels/hotel/:hotelId' 
        //         render={(props) => <Details {...props} hotels={[this.state.hotels]} />} />
        // </div>
    );
  }
}
