import React, { Component } from 'react';
import Header from './header/header';
import Tourlist from './TourList/tourlist';
class Home extends Component {
    render() {
        return (
            <section>
                <div className="jumbotron">
                    <div className="container">
                        <Header />
                    </div>
                    <hr />
                    <Tourlist />
                </div>
            </section>
        );
    }
}

export default Home;
