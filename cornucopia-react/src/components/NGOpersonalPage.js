import React, { Component }  from 'react';

class NGOpersonalPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            ngoInfo: []
        };
    }

    async componentDidMount() {
        const ngoInfo = await this.loadData();
        this.setState({
          ngoInfo
        });
    };
    
    loadData = async () => {
        const ngoUserId = this.props.user.ngo_id;
        console.log('ngo personal page: ',ngoUserId);
        const url = `http://localhost:3000/non-profit/profile/${ngoUserId}`;
        const response = await fetch(url);
        let NGOdata = response.json();
        console.log('ngo data from personal page: ', NGOdata);
        return NGOdata;
    };

    render() {
        const { isloggedin, user } = this.props;
        let loggedInStatus = window.sessionStorage.getItem('loggedInStatus');
        console.log('ngo personal islogged in:  ', loggedInStatus);
        
        return(
            <>
                <h1>{user.ngo_name}</h1>
            </>
        )
    }
};

export default NGOpersonalPage;