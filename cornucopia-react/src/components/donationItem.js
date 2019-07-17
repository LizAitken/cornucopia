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
             <p>Total Need: {itemData.donation_amount}</p>
             <p>Bought: {itemData.number_purchased}</p>
             <p>Still Need: {itemData.amount_still_needed}</p>
             <p>From Where: <a href={itemData.store_link}>{itemData.donation_store_name}</a></p>
             <p>Charity: {itemData.ngo_name}</p>
         </div>   
        </>
    )
}

export default DonationItem;