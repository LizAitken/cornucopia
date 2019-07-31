import React, { Component } from 'react';
import '../styles/popUp.css';
import Modal from './modal';

class AddressModal extends Component {
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
        const { itemData, togglePopup } = this.props;
        const { popupState } = this.state;

        return (
            <>
                <div className='popup'>
                        <div className='popup_inner'>
                            <p className="popup-title">Before you donate...</p>
                            <p className="popup-item-name"> {itemData.donation_name}</p> 
                            <p>Copy the shipping address of {itemData.ngo_name} in order to send it directly:</p>
                            <p>{itemData.ngo_name}</p>
                            <p>{itemData.ngo_address}</p>
                            <button onClick={this.togglePopup} className="yes-button"><a href={itemData.store_link} target='_blank' rel="noopener noreferrer">Onto Wish List</a></button>
                            <button className="close-button" onClick={() => togglePopup()}>Close</button>
                            {!!popupState ? 
                                <Modal itemData={itemData} togglePopup={this.togglePopup} popupState={popupState}/>
                                : 
                                null
                            }
                        </div>
                </div>
            </>
        )
    }
}

export default AddressModal;