import React, { Component } from 'react';

class Topick extends Component {

    render() {
        const { id, country, img, name, info } = this.props.tour;

        return (
            <section >
                <div className="card card-shadow" style={{ width: "21rem", backgroundColor: "rgb(211, 211, 211)" }}>
                    <img className="card-img-top" style={{ height: "250px" }} src={img} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title display-4" style={{ fontSize: "40px" }}>{country}</h4>
                        <h4 >{name}</h4>
                        <hr/>
                        <p className="card-text">{info}</p>
                        <a href="#" className="btn btn-dark">Add To My Tours</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Topick;
