import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss';
const navbar = () => {
    return (
       <nav className="navbar">
            <img src={logo} alt="company logo"/>
            <ul className="nav-links">
                <li><a href="/" className="nav-link">
                    Home
                </a></li>
                <li><a href="/" className="nav-link active">
                    Tours
                </a></li>
                <li><a href="/" className="nav-link">
                    About
                </a></li>
            </ul>
       </nav>
    );
}

export default navbar;
