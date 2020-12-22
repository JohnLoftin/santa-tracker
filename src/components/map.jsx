import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const geoArray = [ 
    {city: "Atlanta", lat: 33.7489954, lng: -84.3879824},
    {city: "Orlando", lat: 28.5383355, lng: -81.3792365},
    {city: "Dallas", lat: 32.7830556, lng: -96.8066667},
    {city: "New York", lat: 40.7142691, lng: -74.0059729},
    {city: "Los Angeles", lat: 34.0522342, lng: -118.2436849},
    {city: "Phoenix", lat: 33.4483771, lng: -112.0740373},
    {city: "Chicago", lat: 41.850033, lng: -87.6500523},
    {city: "Seattle", lat: 47.6062095, lng: -122.3320708},
    {city: "Philadelphia", lat: 39.952335, lng: -75.163789},
    {city: "Memphis", lat: 35.1495343, lng: -90.0489801},
    {city: "Maddison", lat: 43.0730517, lng: -89.4012302},
    {city: "Houston", lat: 29.7632836, lng: -95.3632715}, 
    {city: "Washington DC", lat: 38.889248, lng: -77.050636}
]

const currentLocation = geoArray[Math.floor(Math.random()*geoArray.length)];

const SantaLocation = ({ santaImg, text }) => <div><img src={santaImg} />{text}</div>;

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API;
 
class Map extends Component {

    static defaultProps = {
        center: {
            lat: currentLocation.lat,
            lng: currentLocation.lng
        },
        zoom: 6
    };
    
    render() {
        return (
            <div className="map" style={{ height: '75vh', width: '70%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <SantaLocation
                        lat={currentLocation.lat}
                        lng={currentLocation.lng}
                        santaImg="./img/santa_45x45.png"
                        // text={currentLocation.city}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
 
export default Map;