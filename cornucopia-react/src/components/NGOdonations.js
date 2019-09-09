import React from 'react';
import '../styles/donationItem.css';

const NGOdonations = (props) => {
    const { donations } = props;
    console.log('donations on NGOdonations props: ', donations);

    const deleteData = async (e, itemID) => {
            e.preventDefault();
            console.log("Is it even getting tothe delete data function?", itemID);
            // const itemID = props.match.params.item_id;      
            const url = `http://localhost:3000/donations/delete/${itemID}`;
            const response = await fetch(url);
            return response;
    };
    
    return (
        <>
            <div className='card'>
                <h3 className='item-name'>{donations.donation_name}</h3>
                <div className='image-wrap'>
                    <img src={donations.donation_photo} alt={donations.donation_name}/>
                </div>
                <p className='item-cost'>{donations.donation_cost}</p>
                {donations.amount_still_needed > 0 ?
                    <div className='numbers-wrap'>
                        <div>
                            <h3 className='numbers-title'>Donated</h3>
                            <p className='purchased'>{donations.number_purchased}</p>
                        </div>
                        <div>
                            <h3 className='numbers-title'>Still Need</h3>
                            <p className='still-need'>{donations.amount_still_needed}</p>
                        </div>
                    </div>
                :
                    <div className='numbers-wrap'>
                        <h2 className='goal-met'>Congratulations! You met your goal!</h2>
                    </div>
                }
                <button onClick={e => deleteData(e, donations.donation_id)} className='registry-button'>REMOVE</button>
            </div>

        </>
    )
}

export default NGOdonations;