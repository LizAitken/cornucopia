import React, { Component } from 'react';
import DonationList from './components/donationList';
import './App.css';

class App extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const data = await this.loadData();
    const moreData = await this.loadMoreData();
    this.setState({
      items: data,
      moreItems: moreData
    });
  };

  loadData = async () => {
    const url = `http://localhost:3000/donations/all`;
    const response = await fetch(url);
    const data = response.json();
    console.log("From load data", data);
    return data;
  };

  loadMoreData = async () => {
    const url = `http://localhost:3000/donations/all`;
    const response = await fetch(url);
    const moreData = response.json();
    console.log("From load more data", moreData);
    return moreData;
  };

  render() {
    const { items, moreItems } = this.state;
    return (
      <div className="App">
        <DonationList itemData={items} moreData={moreItems}/>
      </div>
    );
  }
}

export default App;
