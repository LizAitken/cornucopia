import React, { Component } from 'react';
import '../styles/popUp.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state={
            number_purchased: '',
            showYes: false,
            loggedin: this.props.isloggedin
        }
    }

    handleNumberPurchasedUpdate = event => {
        event.preventDefault();
        this.setState({
            number_purchased: event.target.value,
            donation_id: this.props.itemData.donation_id
        });
    }

    handleSubmit = async () => {
        const newInfo = this.state;
        const storeLogin = window.sessionStorage.getItem('loggedInStatus');
        console.log('Store login  :', storeLogin);
        const url = `http://localhost:3000/donations/add-donated-item`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInfo)
        });
        return response;
    }

    showForm = e => {
        e.preventDefault();
        this.setState({
            showYes: true
        })
    }

    render() {
        const { itemData, togglePopup, isloggedin } = this.props;
        const storeLogin = window.sessionStorage.getItem('loggedInStatus');
        
        const { showYes } = this.state;
        
        return (
            <>
                <div className='popup'>
                    <div className='popup_inner'>
                        <p className="popup-title">Did you donate...</p>
                        <p className="popup-item-name"> {itemData.donation_name}</p> 
                        <p> to</p>
                        <p className="ngo-popup-title"> {itemData.ngo_name}?</p>
                        {!!showYes ? 
                            <form className="popup-form" onSubmit={this.handleSubmit}>
                                <label>
                                    <p className="popup-input-title">How many items did you donate?</p>
                                    <input className="popup-input" name='number_purchased'  value={this.state.number_purchased} onChange={this.handleNumberPurchasedUpdate} placeholder='1' type='number' min='1' required></input>
                                </label>
                                <label>
                                    <input name='donation_id' type='hidden' value={itemData.donation_id}/>
                                </label>
                                <button className="submit-button" type="submit" value="Submit">Submit</button>
                            </form>
                            :
                            <div className="button-wrap">
                                <button className="yes-button" onClick={this.showForm}>Yes</button>
                                <button className="no-button" onClick={() => togglePopup()}>No</button>
                            </div>
                        }
                        <button className="close-button" onClick={() => togglePopup()}>Close</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Modal;