import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Redirect } from 'react-router-dom'


import MainNav from './components/mainNav';
import DonationList from './components/donationList';
import NGOSignup from './components/NGOSignup';
import UserSignup from './components/userSignup';
import NGOProfile from './components/ngoProfile';
import NGOLogin from './components/ngoLogin';
import About from './components/about';
import BookMark from './components/bookMarkPage';

import './App.css';


const routesArray = [
  { linkRoute: '/home', linkName: 'Cornupcopia' },
  { linkRoute: '/non-profit/sign-up', linkName: 'Non-Profit?'},
  { linkRoute: '/ngo-login', linkName: 'Log-In'}
]


class App extends Component {
  state = {
    items: [],
    isloggedin: false,
    ngo_id: [null], 
    ngo_name: "", 
    ngo_email:"", 
    ngo_address: "", 
    ngo_website: "", 
    ngo_photo: "", 
    ngo_description: "",
    user: {}
  };

  handleLoginState = user => {
    const {
            ngo_id, 
            ngo_name, 
            ngo_email, 
            ngo_address, 
            ngo_website, 
            ngo_photo, 
            ngo_description 
          } = user;
    
    this.setState({
          isloggedin: true,
          ngo_id, 
          ngo_name, 
          ngo_email, 
          ngo_address, 
          ngo_website, 
          ngo_photo, 
          ngo_description
    });
    // console.log('user  :', user);
    window.sessionStorage.setItem('user', JSON.stringify(user));
    // const storedItem = sessionStorage.getItem('user');
    // console.log('stored item: ', storedItem);
  }

  handleLogoutState = (e) => {
    e.preventDefault();
    window.sessionStorage.clear();
    console.log("logout handler");
  }
  
  async componentDidMount() {
    const data = await this.loadData();
    // console.log('did mount data  : ', data);
    this.setState({
      items: data
    });
  };

  loadData = async () => {
    const url = `http://localhost:3000/donations/all`;
    const response = await fetch(url);
    let data = response.json();
    return data;
  };

  render() {
    const { items, isloggedin } = this.state;
    console.log(items);
    window.sessionStorage.setItem('loggedInStatus', isloggedin);
    let loggedInStatus = window.sessionStorage.getItem('loggedInStatus'); 
    console.log('THis IS THE LOGGED IN STATUS VARIABLE', loggedInStatus);

    return (
      <Router>
          <div className="App">
            <MainNav routes={routesArray} handleLogoutState={(e) => this.handleLogoutState}/>
            {loggedInStatus === 'true' ?
              <div className='total-wrap'>
                <Route path='/' exact render={About}/>
                <Route path="/home" 
                  render={(props) => <DonationList {...props} itemData={items} getAllItems={this.loadData}/>}
                />
                <Route path="/non-profit/sign-up" component={NGOSignup} />
                <Route path="/user-sign-up" component={UserSignup} />
                <Route path="/non-profit/profile/:ngo_id" component={NGOProfile} />
                <Route path="/wish-list" render={BookMark}/>
              </div>
              :
                <>
                  <Route path="/ngo-login" render={(props) => (<NGOLogin {...props} user={this.state} loggingInTest={this.loggedInStatus} handleLoginState={this.handleLoginState}/>)} />
                  <Route path="/non-profit/sign-up" component={NGOSignup} />
                  <Route path="/user-sign-up" component={UserSignup} />
                  <Route path='/' exact render={About}/>
                </>
            }
          </div> 
      </Router>
    );
  }
}

export default App;
