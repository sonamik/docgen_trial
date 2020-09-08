import React from 'react';
import PropTypes from 'prop-types';

import jaguar from '../assets/jaguar.jpeg';
import jaguarCar from '../assets/jaguar_car.jpeg';

/**
 * Jaguar Component
 */
class Jaguar extends React.Component {
    /**
     * Jaguar Constructor
     * @param {*} props 
     */
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        };
    };

    /**
     * Toggle seeing the Jaguar car image
     */
    toggleCar = () => {
        this.setState({clicked: !this.state.clicked});
        this.woohoo('Gago'); /** bla - bla - bla */
    };

    /**
     * Print message
     * @param {String} message
     */
    woohoo = (message) => {
        console.log('WooHoo ', message);
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <img src={jaguar} alt="jaguar"/>
                <div onClick={this.toggleCar}>
                    <div>toggle jaguar car</div>
                    {
                        this.state.clicked && <img src={jaguarCar} alt="jaguarCar"/>
                    }
                </div>
            </div>
        );
    }
}

export default Jaguar;