import React from 'react';

const DonationItem = props => {
    const { itemData } = props;
    // console.log('Item from donation item is: ', itemData);
    return (
        <>
         <div>
             <h3>Item: {itemData.donation_name}</h3>
             <p>Cost: {itemData.donation_cost}</p>
             <p>How Many: {itemData.donation_amount}</p>
             <p>From Where: {itemData.donation_store_name}</p>
         </div>   
        </>
    )
}

export default DonationItem;