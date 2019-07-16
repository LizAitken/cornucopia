import React from 'react';
import PropTypes from 'prop-types';
import DonationItem from './donationItem';

const DonationList = props => {
    const { itemData } = props;

    return (
          <>
            <h1>Items for Donation</h1>
            <ul>{
              itemData.map(item =>
                <li key={item.donation_id}>
                  <DonationItem itemData={item}/>
                </li>)
            }</ul>
          </>
    )
}

DonationList.propTypes = {
    itemData: PropTypes.array
}

export default DonationList;