import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/mainNav.css';

const MainNav = props => {
        const { isloggedin } = props;
        return (
            <nav className='nav-bar'>
                <ul>
                    <li className='route-li'>
                        <NavLink to={'/home'} className='home-link'>Cornucopia</NavLink>
                        <div>
                            <NavLink to={'/'} className='signup-link'>About</NavLink>
                            {!isloggedin ?
                                <NavLink to={'/ngo-login'} className='signup-link'>Log-In</NavLink>
                            :
                                <button className='logout-text' onClick={props.handleLogoutState()}>Log-Out</button>
                            }
                        </div>
                    </li>
                </ul>
            </nav>
        );
};

export default MainNav;
