import React from 'react';
import '../styles/popUp.css';

const Modal = props => {
    const { itemData, togglePopup} = props;
    
    return (
        <>
            <div className='popup'>
                <div className='popup_inner'>
                    <h3>Did you donate {itemData.donation_name} to {itemData.ngo_name}?</h3>
                    <h2>How many items did you donate?</h2>
                    <input type='number' min='1'></input>
                    <button>Yes</button>
                    <button onClick={() => togglePopup()}>Close</button>
                </div>
            </div>
        </>
    )
}
export default Modal;