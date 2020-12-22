import { connect } from 'react-redux';
import { useState } from 'react';
import Map from './map';

const Landing = props => {
    return (
        <div>
            <h1 className="title">SantaTracker</h1>
            <Map />
        </div>
    )
}

export default Landing;