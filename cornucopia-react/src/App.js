import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Redirect } from 'react-router-dom'

import MainNav from './components/mainNav';
import DonationList from './components/donationList';
import NGOSignup from './components/NGOSignup';
import UserSignup from './components/userSignup';
import NGO_Profile from './components/ngoProfile';
import NGOLogin from './components/ngoLogin';
import About from './components/about';
import BookMark from './components/bookMarkPage';
import PlzLogin from './components/plzLogin';
import NGOpersonalPage from './components/NGOpersonalPage';

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

    console.log('handle login stat user: ', user);
    this.setState({
          isloggedin: true,
          ngo_id, 
          ngo_name, 
          ngo_email, 
          ngo_address, 
          ngo_website, 
          ngo_photo, 
          ngo_description,
          user
    });
    window.sessionStorage.setItem('user', JSON.stringify(user));
    // console.log('stored item: ', storedItem);
  }

  handleLogoutState = (e) => {
    e.preventDefault();
    window.sessionStorage.clear();
    this.setState({
      isloggedin:false
    });
  }
  
  async componentDidMount() {
    const data = await this.loadData();
    // console.log('did mount data  : ', data);
    let storedItem1 = sessionStorage.getItem('user');
    // let loggedInStatus = window.sessionStorage.getItem('loggedInStatus'); 
    const storedItem = JSON.parse(storedItem1);
    console.log('stored item: ',storedItem1);

    this.setState({
      items: data
      // user: storedItem
    });
  };

  loadData = async () => {
    const url = `http://localhost:3000/donations/all`;
    const response = await fetch(url);
    let data = response.json();
    return data;
  };

  render() {
    const { items, isloggedin, user } = this.state;
    console.log('USERRR : ', user);
    window.sessionStorage.setItem('loggedInStatus', isloggedin);
    let loggedInStatus = window.sessionStorage.getItem('loggedInStatus'); 

    return (
      <Router>
          <div className="App">
            <MainNav routes={routesArray} handleLogoutState={(e) => this.handleLogoutState} isloggedin={isloggedin} />
            {loggedInStatus === 'true' ?
              <div className='total-wrap'>
                <Route path='/' exact render={About}/>
                <Route path="/home" 
                  render={(props) => <DonationList {...props} itemData={items} getAllItems={this.loadData} isloggedin={isloggedin}/>}
                />
                <Route path="/non-profit/sign-up" render={(props) => (<NGOSignup {...props} isloggedin={isloggedin}/>)}/>
                <Route path="/user-sign-up" component={UserSignup} />
                <Route path="/non-profit/profile/:ngo_id" component={NGO_Profile}/>
                <Route path="/wish-list" render={(props) => <BookMark {...props} isloggedin={isloggedin} user={user}/>}/>
              </div>
              :
                <>
                  <Route path="/ngo-login" render={(props) => (<NGOLogin {...props} user={this.state} handleLoginState={this.handleLoginState}/>)} />
                  <Route path="/non-profit/sign-up" render={(props) => (<NGOSignup {...props} user={this.state} isloggedin={isloggedin} handleLoginState={this.handleLoginState}/>)} />
                  <Route path="/user-sign-up" component={UserSignup} />
                  <Route path='/' exact render={About}/>
                  <Route path="/non-profit/profile/:ngo_id" component={NGO_Profile}/>
                  <Route path="/wish-list" render={PlzLogin}/>
                  <Route path="/home" 
                  render={(props) => <DonationList {...props} user={user} itemData={items} getAllItems={this.loadData} isloggedin={isloggedin}/>}/>
                </>
            }
          </div> 
      </Router>
    );
  }
}

export default App;
