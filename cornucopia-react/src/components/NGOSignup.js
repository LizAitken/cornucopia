import React, { Component } from 'react';
import '../styles/ngoLogin.css';

class NGOSignup extends Component {
    constructor(props) {
        super(props);
        this.state= {
            ngo_id: [null],
            name: '', 
            email: '',
            password: '',
            ein: '',
            address: '',
            description: '',
            type_id: '',
            website: '',
            photo: ''
        };
    }

    handleNGO_NameChange = event => {
        event.preventDefault();
        this.setState({
            name: event.target.value
        });      
    }

    handleNGO_EmailChange = event => {
        event.preventDefault();
        this.setState({
            email: event.target.value
        });      
    }

    handleNGO_PasswordChange = event => {
        event.preventDefault();
        this.setState({
            password: event.target.value
        });      
    }

    handleEINChange = event => {
        event.preventDefault();
        this.setState({
            ein: event.target.value
        });      
    }

    handleAddressChange = event => {
        event.preventDefault();
        this.setState({
            address: event.target.value
        });      
    }

    handleDescriptionChange = event => {
        event.preventDefault();
        this.setState({
            description: event.target.value
        });      
    }

    handleTypeIDChange = event => {
        event.preventDefault();
        this.setState({
            type_id: event.target.value
        });      
    }

    handleWebsiteChange = event => {
        event.preventDefault();
        this.setState({
            website: event.target.value
        });      
    }

    handlePhotoChange = event => {
        event.preventDefault();
        this.setState({
            photo: event.target.value
        });      
    }

    handleNGOSubmit = async () => {
        const newInfo = this.state;
        console.log('New Info : ', newInfo);
        const url = `http://localhost:3000/non-profit/sign-up`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInfo)
        });
        console.log('handle Submit: ', response);
        return response;
    }

    render() {
        return (
            <>
              <h1>Non-Profit Sign-Up</h1>
              <form onSubmit={this.handleNGOSubmit}>
                  <label>
                      <input type='text' value={this.state.name} onChange={this.handleNGO_NameChange} placeholder='Non-Profit Name' required/>
                  </label>
                  <label>
                      <input type='password' value={this.state.password} onChange={this.handleNGO_PasswordChange} placeholder='password'required/>
                  </label>
                  <label>
                      <input type='text' value={this.state.email} onChange={this.handleNGO_EmailChange} placeholder='Email' required/>
                  </label>
                  <label>
                      <input type='text' value={this.state.address} onChange={this.handleAddressChange} placeholder='Address'/>
                  </label>
                  <label>
                      <input type='url' value={this.state.website} onChange={this.handleWebsiteChange} placeholder='Website'/>
                  </label>
                  <label>
                      <input type='text-field' value={this.state.description} onChange={this.handleDescriptionChange} placeholder='Description' required/>
                  </label>
                  <label>
                      <input type='number' value={this.state.ein} onChange={this.handleEINChange} placeholder='EIN'/>
                  </label>
                  <select value={this.state.type_id} onChange={this.handleTypeIDChange} required>
                        <option value='1'>Animal Welfare</option>
                        <option value='2'>Environmental & Conservation</option>
                        <option value='3'>Disaster Relief</option>
                        <option value='4'>International Development</option>
                        <option value='5'>Human Rights</option>
                        <option value='6'>Social Justice</option>
                        <option value='7'>Health</option>
                        <option value='8'>Educational</option>
                        <option value='9'>Arts & Culture</option>
                        <option value='10'>Religious</option>
                  </select>
                  <label>
                      <input type='text' value={this.state.photo} onChange={this.handlePhotoChange} placeholder='Photo URL'/>
                  </label>
                  <input className='sign-in-button' type="submit" value="Submit" />
              </form>  
            </>
        )
    }
}

export default NGOSignup; 