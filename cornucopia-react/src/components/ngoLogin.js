import React, { Component } from 'react';

import '../styles/ngoLogin.css';

class NGO_Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            ngo_id: [null],
            name: '', 
            email: '',
            password: ''
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

    handleNGOSubmit = async () => {
        const newInfo = this.state;
        console.log('New Info : ', newInfo);
        const url = `http://localhost:3000/non-profit/log-in`;
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
              <h1>Login</h1>
              <form onSubmit={this.handleNGOSubmit}>
                  <label>
                      <input type='text' value={this.state.name} onChange={this.handleNGO_NameChange} placeholder='Non-Profit Name' required/>
                  </label>
                  <label>
                      <input type='password' value={this.state.password} onChange={this.handleNGO_PasswordChange} placeholder='password' required/>
                  </label>
                  <label>
                      <input type='text' value={this.state.email} onChange={this.handleNGO_EmailChange} placeholder='Email' required/>
                  </label>
                  <input type="submit" value="Submit" />
              </form>  
            </>
        )
    }
}

export default NGO_Login;