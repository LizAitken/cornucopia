import React, { Component } from 'react';

class UserSignup extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user_id: [null],
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }

    handleFirstNameChange = event => {
        event.preventDefault();
        this.setState({
            firstName: event.target.value
        });      
    }

    handleLastNameChange = event => {
        event.preventDefault();
        this.setState({
            lastName: event.target.value
        });      
    }

    handleEmailChange = event => {
        event.preventDefault();
        this.setState({
            email: event.target.value
        });      
    }

    handlePasswordChange = event => {
        event.preventDefault();
        this.setState({
            password: event.target.value
        });      
    }

    handleSubmit = async () => {
        const newInfo = this.state;
        
        const url = `http://localhost:3000/users/user-sign-up`;
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

    render() {
        return (
            <>
              <h1>Sign-Up</h1> 
              <form onSubmit={this.handleSubmit}>
                  <label >
                      <input type='text' value={this.state.firstName} placeholder='First Name' onChange={this.handleFirstNameChange} required/>
                  </label>
                  <label >
                      <input type='text' value={this.state.lastName} placeholder='Last Name' onChange={this.handleLastNameChange} required/>
                  </label>
                  <label>
                      <input type='password' value={this.state.password} placeholder='password' onChange={this.handlePasswordChange} required/>
                  </label>
                  <label>
                      <input type='text' value={this.state.email} placeholder='Email' onChange={this.handleEmailChange} required/>
                  </label>
                  <input type="submit" value="Submit" />
                </form>              
            </>
        )
    }
}

export default UserSignup;