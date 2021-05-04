import React, { Component } from 'react';
import Tour from '../../Tour/Tour';
import './tourlist.scss';
import { tourData } from '../../../tourData';
class Tourlist extends Component {
    state = {
        tours: tourData
    };
    removeTourHandler = id => {
        const {tours}=this.state;
        const storedTours=tours.filter(tour=> tour.id!==id);
        this.setState({
            tours:storedTours
        });
    }
    render() {
        const { tours } = this.state;
        return (
            <section className="tour-list">
                <h6 className="lead display-4">Tour List</h6>
                {tours.map(tour => (
                    <Tour key={tour.id} tour={tour} removeTourHandler={this.removeTourHandler} />
                ))}
            </section>
        );
    }
}

export default Tourlist;
