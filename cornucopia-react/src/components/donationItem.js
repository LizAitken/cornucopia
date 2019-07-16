import React from 'react';
import '../styles/donationItem.css';

const DonationItem = props => {
    const { itemData } = props;
    // console.log('Item from donation item is: ', itemData);
    return (
        <>
         <div>
             <h3>Item: {itemData.donation_name}</h3>
             <img src={itemData.donation_photo} alt={itemData.donation_name}/>
             <p>Cost: {itemData.donation_cost}</p>
             <p>Needed: {itemData.donation_amount}</p>
             <p>From Where: {itemData.donation_store_name}</p>
             <p>Charity: {itemData.ngo_name}</p>
         </div>   
        </>
    )
}

export default DonationItem;