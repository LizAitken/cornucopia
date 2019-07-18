import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <>
            <div className='about-wrap'>
                <div className='about-photo'></div>
                <h1 className='about-title'>About Cornucopia</h1>
                <div className='par-wrap'>
                    <p className='first-par'>We believe that people have a desire to reach out and help this world and their fellow man. Sometimes we just get in our own way. Our lives are so busy that it is difficult to find the time to search for a cause and then find out how and where to donate. Cornucopia is here to help with this.</p>
                    <p className='sec-par'>We connect donators with the causes they are passionate about and help them discover new organizations that are fighting to make the world a better place. Cornucopia lets the donator choose items from a non-profit's wish-list or registry and purchase those items directly from the source.</p>
                </div>
            </div>
        </>
    )
}


export default About;
