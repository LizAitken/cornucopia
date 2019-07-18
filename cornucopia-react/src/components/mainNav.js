import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import '../styles/mainNav.css';

const MainNav = () => {

    return (
        <nav className='nav-bar'>
          <ul>
                <li className='route-li'>
                    <NavLink to={'/home'} className='home-link'>Cornucopia</NavLink>
                    <NavLink to={'/user-sign-up'} className='signup-link'>Sign-Up</NavLink>
                </li>
          </ul>
        </nav>
    );
};

export default MainNav;

MainNav.propTypes = {
    routes: PropTypes.array
};