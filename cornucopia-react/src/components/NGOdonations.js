import React from 'react';
import '../styles/donationItem.css';

const NGOdonations = (props) => {

    const { donations } = props;
    console.log('donations on NGOdonations props: ', donations);
    
    return(
        <>
            <div className='card'>
                <h3 className='item-name'>{donations.donation_name}</h3>
                <p>{donations.donation_cost}</p>
                <div>
                    <div>
                        <h3>Donated</h3>
                        <p>{donations.number_purchased}</p>
                    </div>
                    <div>
                        <h3>Still Need</h3>
                        <p>{donations.amount_still_needed}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NGOdonations;