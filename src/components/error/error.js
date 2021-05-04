import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class error extends Component {
    render() {
        return (
            <section style={{ marginBottom: "16.2%", marginTop: "20px" }}>
                <center>
                    <p className="lead display-4">404 Page Not Found!</p>
                    <Link className="btn btn-dark btn-lg" role="button" to="/">Go Back Home</Link></center>
            </section>
        );
    }
}

export default error;
