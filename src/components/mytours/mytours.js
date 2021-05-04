import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import '../Home/TourList/tourlist.scss'
import {tourData} from '../../tourData';
class mytours extends Component {
    state={
        tours:tourData
    }
    removeTourHandler =id =>{
        const {tours}=this.state;
        const storedTours=tours.filter(tour=> tour.id!==id);
        this.setState({
            tours:storedTours
        });
    }
    render() {
        const {tours}=this.state;
        return (
            <section className="tour-list">
                <h1 className="lead display-4"> My Tour List</h1>
                <hr/>
                {tours.map(tour=>(
                    <Tour key={tour.id} tour={tour} removeTourHandler={this.removeTourHandler}/>
                ))}
            </section>
        );
    }
}

export default mytours;
