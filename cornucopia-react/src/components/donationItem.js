import React from 'react';
import { Link } from "react-router-dom";
import '../styles/donationItem.css';

const DonationItem = props => {
    const { itemData } = props;
    // console.log('Item from donation item is: ', itemData);
    return (
        <>
         <div className='card'>
             <h3 className='item-name'>{itemData.donation_name}</h3>
             <div className='image-wrap'>
                <img src={itemData.donation_photo} alt={itemData.donation_name}/>
             </div>
             <p className='item-cost'>${itemData.donation_cost}</p>             
             <div className='ngo-title-wrap'>
                <p className='ngo-title'><Link to={`/non-profit/profile/${itemData.donation_receiver}`}>{itemData.ngo_name}</Link></p>
                <p className='subtitle'>{itemData.type_name}</p>
            </div>
             <div className='numbers-wrap'>
                <div className='numbers'>
                    <p className='numbers-title'>Total Need</p>
                    <p className='need'>{itemData.donation_amount}</p>
                </div>
                <div className='numbers'>
                    <p className='numbers-title'>Bought</p>
                    <p className='purchased'>{itemData.number_purchased}</p>
                </div>
                <div className='numbers'>
                    <p className='numbers-title'>Still Need</p>
                    <p className='still-need'>{itemData.amount_still_needed}</p>
                </div>
            </div>
             <button className='registry-button'><a href={itemData.store_link}>REGISTRY</a></button>
         </div>   
        </>
    )
}

export default DonationItem;