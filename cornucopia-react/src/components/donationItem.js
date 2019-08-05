import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/donationItem.css';
import AddressModal from './addressModal';

class DonationItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupState: false
        }
    }

    togglePopup = () => {
        this.setState({
          popupState: !this.state.popupState
        });
    }

    render() {
        const { itemData, isloggedin } = this.props;
        
        const storeLogin = window.sessionStorage.getItem('loggedInStatus');
        
        const { popupState } = this.state;

        return (
            <>
            <div className='card'>
                <h3 className='item-name'>{itemData.donation_name}</h3>
                <div className='image-wrap'>
                    <img src={itemData.donation_photo} alt={itemData.donation_name}/>
                </div>
                <p className='item-cost'>{itemData.donation_cost}</p>             
                <div className='ngo-title-wrap'>
                    <p className='ngo-title'><Link to={`/non-profit/profile/${itemData.donation_receiver}`}>{itemData.ngo_name}</Link></p>
                    <p className='subtitle'>{itemData.type_name}</p>
                </div>
                {}
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
                <button onClick={this.togglePopup} className='registry-button'>DONATE</button>
            </div>
            {!!popupState ? 
                    <AddressModal itemData={itemData} togglePopup={this.togglePopup} popupState={popupState} isloggedin={isloggedin}/>
                    : 
                    null
                }
            </>
        )
    }
}

export default DonationItem;