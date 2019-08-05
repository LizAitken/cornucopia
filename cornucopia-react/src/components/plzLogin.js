import React from 'react';
import { Link } from "react-router-dom";

const PlzLogin = () => {
    return(
        <div className='plz-login-wrap'>
            <h1 className='plz-login'>Please log-in to view this page!</h1>
            <h1 className="goto-login"><Link to={'/ngo-login'}>Log-In</Link></h1>
        </div>
    )
}

export default PlzLogin;