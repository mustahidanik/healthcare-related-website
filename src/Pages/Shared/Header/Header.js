import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="nav-container ">
            <nav>
                <Link to="/pricing">Pricing</Link>
                <Link to="/specialist">Specialist</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/home">Home</Link>
            </nav>
        </div>
    );
};

export default Header;