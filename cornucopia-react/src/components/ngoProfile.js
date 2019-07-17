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
        console.log('PROPS  :', this.props);
        console.log('NGO ID   :   ', ngoID);

        const url = `http://localhost:3000/non-profit/profile/${ngoID}`;
        const response = await fetch(url);
        let NGOdata = response.json();
        console.log("From NGO load data", NGOdata);
        return NGOdata;
    };

    render() {
        const { ngoInfo } = this.state;
        return (
            <>
                <div>
                    <h1>Profile for Non-Profit</h1>
                    <p>{ngoInfo.ngo_name}</p>
                </div>
            </>
        )
    }
}

export default NGO_Profile;