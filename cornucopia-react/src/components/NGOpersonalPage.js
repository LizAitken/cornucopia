import React, { Component } from 'react';
import NGOdonations from './NGOdonations';
import '../styles/donationItem.css';

class NGOpersonalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donations: []
        }
    }

    componentDidMount = async () => {
        const itemData = await this.loadData();
        // console.log('item data from personal page:', itemData);
        this.setState({
          donations: itemData
        });
    };
    
    loadData = async () => {
        const ngo_id = this.props.match.params.ngo_id;
        const url = `http://localhost:3000/donations/items/${ngo_id}`;
        const response = await fetch(url);
        let data = await response.json();  
        // console.log("data from personal page load data", data);  
        return data;
    };
    
    render() {
        const { user } = this.props;
        const { donations } = this.state;
        
        return(
            <>
                <h1>{user.ngo_name}</h1>
                <h2>Donated Items</h2>
                <div className='card-list'>
                    <ul>
                        { 
                            donations.map((item,index) => {
                                return (
                                    item.number_purchased > 0 ?
                                        <li key={index}>
                                            <NGOdonations donations={item}/>                            
                                        </li>
                                    :
                                    <></>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        );
    }
};

export default NGOpersonalPage;
