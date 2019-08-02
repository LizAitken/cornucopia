import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

import '../styles/ngoLogin.css';

class NGOLogin extends Component {
    constructor(props) {
        super(props);
        this.state= {
            ngo_id: [null], 
            email: '',
            password: '',
            redirect: false
        };
    }

    setRedirect = () => {
        console.log('redirecting....');
        this.setState({
            redirect: true
        });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            console.log('render redirect   :   ',this.state.redirect);
            return <Redirect to='/home' />
        } else {
            console.log('did not redirect');
        }
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

    handleNGOSubmit = async (e) => {
        e.preventDefault();
        const newInfo = this.state;
        const url = `http://localhost:3000/non-profit/log-in`;
        this.setRedirect()
        this.renderRedirect();

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Accept:"application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newInfo)
            });
            const userData = await response.json();

            if (!!userData.data) {
                const { ngo_id, ngo_name, ngo_email, ngo_address, ngo_website, ngo_photo, ngo_description } = userData.data;
                this.props.handleLoginState({
                    ngo_id, 
                    ngo_name, 
                    ngo_email, 
                    ngo_address, 
                    ngo_website, 
                    ngo_photo, 
                    ngo_description
                });
            }
        } catch (err) {
            console.log('NGO login submit error', err);
        }
    };

    render() {
        const { login } = this.state;
        
        return (
            <>
              <h1>Login</h1>
              <form onSubmit={this.handleNGOSubmit}>
                 <label>
                      <input type='text' name='email' value={this.state.email} onChange={this.handleNGO_EmailChange} placeholder='Email' required/>
                  </label>
                  <label>
                      <input type='password' value={this.state.password} onChange={this.handleNGO_PasswordChange} placeholder='password' required/>
                  </label>
                  <input type="submit" value="Submit" />
              </form>
              <p>Not signed up yet? <Link to="/non-profit/sign-up">Non-Profit Sign Up Here</Link></p>  
            </>
        )
    }
}

export default NGOLogin;