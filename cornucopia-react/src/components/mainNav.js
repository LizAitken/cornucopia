import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const MainNav = props => {
    const { routes } = props;
    console.log("routes are", routes);
    return (
        <nav>
          <ul>
            {routes.map(route => (
                <li key={`link-${route.linkName}`}>
                    <Link to={route.linkRoute}>{route.linkName}</Link>
                </li>
            ))}
          </ul>
        </nav>
    );
};

export default MainNav;

MainNav.propTypes = {
    routes: PropTypes.array
};