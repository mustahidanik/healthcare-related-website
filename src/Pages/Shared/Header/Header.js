import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, LogOut } = useAuth()
    return (
        <div className="nav-container ">
            <nav>
                {
                    user.email ? <span>

                        <Link onClick={LogOut} to="/home"><small className="userName">{user.displayName} </small>   Sign Out</Link>
                    </span> : <Link to="/login">Sign In</Link>
                }
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