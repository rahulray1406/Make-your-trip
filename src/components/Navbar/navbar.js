import React from 'react';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
const navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <img src={logo} alt="company logo" />
            <ul className="nav-links">
                <li><NavLink className="nav-link" to="/" >
                    Home
                </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/tours" >
                       My Tours
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/checkout" >
                        Checkout
                </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default navbar;
