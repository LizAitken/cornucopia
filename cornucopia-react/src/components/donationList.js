import React from 'react';
import PropTypes from 'prop-types';
import DonationItem from './donationItem';
import '../styles/donationItem.css';

const DonationList = props => {
    const { itemData } = props;

    return (
        <div className='card-list-wrap'>
          <h1>Items for Donation</h1>
          <div className='card-list'>
            <ul>{
              itemData.map((item,index) =>
                <li key={index}>
                  <DonationItem itemData={item}/>
                </li>)
            }</ul>
          </div>
        </div>
    )
}

DonationList.propTypes = {
    itemData: PropTypes.array
}

export default DonationList;