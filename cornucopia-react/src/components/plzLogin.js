import React from 'react';
import { Link } from "react-router-dom";

const PlzLogin = () => {
    return(
        <>
            <h1>Please log-in to view this page!</h1>
            <h1 className="goto-login"><Link to={'/ngo-login'}>Log-In</Link></h1>
        </>
    )
}

export default PlzLogin;