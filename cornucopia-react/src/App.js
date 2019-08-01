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
  { linkRoute: '/user-sign-up', linkName: 'Sign-Up'}
]


class App extends Component {
  state = {
    items: [],
    isloggedin: true,
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

    localStorage.set('UserInfo', user);

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
  }

  handleLogoutState = () => {
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
    // console.log('donations all response   :',response);
    let data = response.json();
    // console.log("From load data", data);
    return data;
  };

  render() {
    const { items, isloggedin } = this.state;
    console.log(isloggedin);

    return (
      <Router>
          <div className="App">
            <MainNav routes={routesArray}/>
            {!!isloggedin ?
              <div className='total-wrap'>
                <Route path='/' exact render={About}/>
                <Route path="/home" 
                  render={(props) => <DonationList {...props} itemData={items}/>}
                />
                <Route path="/non-profit/sign-up" component={NGOSignup} />
                <Route path="/user-sign-up" component={UserSignup} />
                <Route path="/non-profit/profile/:ngo_id" component={NGOProfile} />
                <Route path="/wish-list" render={BookMark}/>
              </div>
              :
              <>
                <Route path="/non-profit/sign-up" component={NGOSignup} />
                <Route path="/user-sign-up" component={UserSignup} />
                <Route path="/ngo-login" render={(props) => (<NGOLogin {...props} user={this.state} handleLoginState={this.handleLoginState}/>)} />

              </>
              }
          </div> 
      </Router>
    );
  }
}

export default App;
