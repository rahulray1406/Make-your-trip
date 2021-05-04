import React, { Component } from 'react';

class header extends Component {
    render() {
        return (
            <span>
                <form class="form-inline">
                    <input class="form-control form-control mr-3 w-5" type="text" placeholder="Search for trips..."
                        aria-label="Search" />
                </form>
                <h1>Hello from header(Top picks of the week)!</h1>
            </span>
        );
    }
}

export default header;
