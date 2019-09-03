import React from "react";
// import NGOpersonalPage from './components/NGOpersonalPage';
import { NavLink } from "react-router-dom";
import '../styles/mainNav.css';

const MainNav = props => {
        const { isloggedin, user } = props;
        let nonprofitPagePath = `/non-profit/personal-page/${user.ngo_id}`;
        console.log('path is ',nonprofitPagePath);
        console.log('email is', user.ngo_email);

        return (
            <nav className='nav-bar'>
                <ul>
                    <li className='route-li'>
                        <NavLink to={'/home'} className='home-link'>Cornucopia</NavLink>
                        <div>
                            <NavLink to={'/'} className='signup-link'>About</NavLink>
                            {!isloggedin ?
                                <>
                                    <NavLink to={'/ngo-login'} className='signup-link'>Log-In</NavLink>
                                </>
                            :
                                <>
                                    <NavLink to={nonprofitPagePath} className='signup-link'>{user.ngo_email}</NavLink>
                                    <button className='logout-text' onClick={props.handleLogoutState()}>Log-Out</button>
                                </>
                            }
                        </div>
                    </li>
                </ul>
            </nav>
        );
};

export default MainNav;
