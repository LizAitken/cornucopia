import React, { Component } from 'react';

class NGO_Profile extends Component {
    state = {
        ngoInfo: []
    }

    async componentDidMount() {
        const ngoInfo = await this.loadData();
        this.setState({
          ngoInfo
        });
    };
    
    loadData = async () => {
        const ngoID = this.props.match.params.ngo_id;
        const url = `http://localhost:3000/non-profit/profile/${ngoID}`;
        const response = await fetch(url);
        let NGOdata = response.json();
        return NGOdata;
    };

    render() {
        const { ngoInfo } = this.state;
        return (
            <>
                <div>
                    <h1>Profile for Non-Profit</h1>
                    <h2>{ngoInfo.ngo_name}</h2>
                    <img src={ngoInfo.photo} alt={ngoInfo.ngo_name} />
                    <p>{ngoInfo.ngo_address}</p>
                    <p>{ngoInfo.ngo_email}</p>
                    <a href={ngoInfo.ngo_website}><p>Visit our Website!</p></a>

                </div>
            </>
        )
    }
}

export default NGO_Profile;