import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainNav from './components/mainNav';
import DonationList from './components/donationList';
import NGOSignup from './components/NGOSignup';
import UserSignup from './components/userSignup';

import './App.css';

const routesArray = [
  { linkRoute: '/home', linkName: 'Cornupcopia' },
  { linkRoute: '/non-profit/sign-up', linkName: 'Non-Profit?'},
  { linkRoute: '/user-sign-up', linkName: 'Donator?'}
]


class App extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const data = await this.loadData();
    this.setState({
      items: data
    });
  };

  loadData = async () => {
    const url = `http://localhost:3000/donations/all`;
    const response = await fetch(url);
    let data = response.json();
    console.log("From load data", data);
    return data;
  };

  render() {
    const { items } = this.state;
    return (
      <Router>
        <div className="App">
          <MainNav routes={routesArray}/>
          <Route path="/home" 
            render={(props) => <DonationList {...props} itemData={items}/>}
          />
          <Route path="/non-profit/sign-up" component={NGOSignup} />
          <Route path="/user-sign-up" component={UserSignup} />
        </div>
      </Router>
    );
  }
}

export default App;
