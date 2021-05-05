import React, { Component } from 'react';
import TopickList from './Topick/TopickList';
class header extends Component {
    render() {
        return (
            <span>
                <form class="form-inline float-right">
                    <input class="form-control form-control mr-3 w-5" type="text" placeholder="Search for trips..."
                        aria-label="Search" />
                </form>
                <h1>Top Picks Of The Week</h1>
                <TopickList/>
            </span>
        );
    }
}

export default header;
