import React, { Component } from 'react';
import Topick from './Topick';
import {specialTourData} from '../../../../tourData';
class TopickList extends Component {
    state={
        tours:specialTourData
    };
    render() {
        const{tours}=this.state;
        return (
            <section className="card-deck" style={{ marginTop: "20px" }}>
                {tours.map(tour=>(
                    <Topick key={tour.id} tour={tour}/>
                ))}
            </section>
        );
    }
}

export default TopickList;
