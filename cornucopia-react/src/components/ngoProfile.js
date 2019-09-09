import React, { Component } from 'react';
import '../styles/ngoProfile.css';

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
        // console.log('ngo data', NGOdata);
        return NGOdata;
    };

    render() {
        const { ngoInfo } = this.state;

        return (
            <>
                <div className='profile-wrap'>
                    <h2 className='profile-title'>{ngoInfo.ngo_name}</h2>
                    <p className='ngo-type'>{ngoInfo.type_name}</p>
                    <div className='profile-content-wrap'>
                        <img className='ngo-photo' src={ngoInfo.ngo_photo} alt={ngoInfo.ngo_name} />
                        <p className='ngo-description'>{ngoInfo.ngo_description}</p>
                        <div className='ngo-contact'>
                            <h3 className='contact-us'>Contact Us</h3>
                            <p className='address-text'>{ngoInfo.ngo_address}</p>
                            <a href={ngoInfo.ngo_email}><img className='email-icon' src="https://img.icons8.com/ios/50/000000/new-post.png" alt='email icon'></img></a>
                            <a href={ngoInfo.ngo_website} target='_blank'><img className='website-icon' src="https://img.icons8.com/wired/64/000000/domain.png" alt='website icon'></img></a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NGO_Profile;