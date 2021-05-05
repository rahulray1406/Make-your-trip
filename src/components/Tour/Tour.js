import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Tour.scss';
class Tour extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    }
    render() {
        const { id, city, img, name, info } = this.props.tour;
        const { removeTourHandler } = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="tour img" />
                    <span className="close-btn" onClick={() => removeTourHandler(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info
                    <span onClick={this.handleInfo}>
                            <i className="fas  fa-caret-square-down" />
                    <Link className="btn btn-dark btn-sm" role="button" to="/tours" style={{marginInline:"20px"}}>Add To My tours</Link>
                    </span></h5>
                    
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        );
    }
}

export default Tour;
