import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DonationItem from './donationItem';
import '../styles/donationItem.css';

class DonationList extends Component {
  constructor(props) {
    super(props);
      this.state= {
          sortedItemData:[],
          type_id: ''
      };
  }

  handleTypeNameChange = async (event) => {
    event.preventDefault(); 
    const data = await this.loadData(event.target.value); 
    this.setState({
         sortedItemData: data
    });
  }

  componentDidMount() {
    const { itemData } = this.props;
    console.log('component did mount', itemData);
    this.setState({
      sortedItemData: itemData
    });
  };

  loadData = async type_id => {
    const url = `http://localhost:3000/donations/all/type/${type_id}`;
    const response = await fetch(url);
    let data = await response.json();  
    console.log("data from load data", data);  
    return data;
  };
    
  render() {
    //const { itemData } = this.props;
    const { type_id, sortedItemData } = this.state;
  
    console.log('second type name', type_id);

    return (
          <div className='card-list-wrap'>
            <h1>Donations</h1>
            <form>
              <p>Sort By Non-Profit Type</p>
              <select className='select-menu' value={type_id} onChange={(e) => this.handleTypeNameChange(e)}>
                  <option>All</option>
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
            </form>
            <div className='card-list'>
              <ul>{
                sortedItemData.map((item,index) =>
                  <li key={index}>
                    <DonationItem itemData={item}/>
                  </li>)
              }</ul>
            </div>
          </div>
      )
    }
}

DonationList.propTypes = {
    itemData: PropTypes.array
}

export default DonationList;