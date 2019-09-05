import React from 'react';

const NGOdonations = (props) => {

    const { donations } = props;

    return(
        <>
            <div>
                <p>{donations.donation_name}</p>
                <p>{donations.donation_cost}</p>
            </div>
        </>
    )
}

export default NGOdonations;