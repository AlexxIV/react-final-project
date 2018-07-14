import React, { Component } from 'react';
import Clock from '../Clock/Clock';
import '../../../styles/includes/weather/weather.scss';

const pirinLocation = '47080';
const apiKey = 'ralDgGZ1WtcDhDszRb8wf4jzr61GGCFo';
const lang = 'en-us';
const details = 'false'
const BASE_URL = `http://dataservice.accuweather.com/currentconditions/v1/${pirinLocation}?apikey=${apiKey}&language=${lang}&details=${details} HTTP/1.1`

export default class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: {
                WeatherIcon: '',
                Temperature: {
                    Metric: {
                        Value: 0
                    }
                },
                WeatherText: ''
            }
        }
    }

    componentDidMount() {
        fetch(BASE_URL)
            .then(rawData => rawData.json())
            .then(processedData => this.setState({ weather: processedData[0] }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="card weather-card">
                <img
                    src={'https://developer.accuweather.com/sites/default/files/' +
                        (this.state.weather.WeatherIcon < 10 ? '0' + this.state.weather.WeatherIcon
                            : this.state.weather.WeatherIcon) + '-s.png'}
                    alt="Wheather Icon"
                    className="card-img-top weather-icon" />
                <div className="card-body">
                    <h5 className="card-title">Pirin, Bulgaria</h5>
                    <p className="card-text">{this.state.weather.WeatherText}</p>
                    <p className="card-text">
                        <span>{this.state.weather.Temperature.Metric.Value}&deg;C</span>
                        <span><Clock /></span>
                    </p>
                </div>
            </div>
        )
    }
}


