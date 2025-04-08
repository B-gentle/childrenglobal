import React from 'react';
import './aboutUs.css';
import aboutUs from '../../../assets/JulyAbout.png';
import { Link } from 'react-router';

const Mandate = () => {
    return (
        <div className='about-us'>
            <div className='about-lhs'>
                <div className='box brown'></div>
                <div className='box green'></div>
                <img src={aboutUs} alt='mandate' />
            </div>
            <div className='mandate-text'>
                <h3>About Us</h3>
                <h2>We strive to lead every child or parent that needs light to the ultimate source</h2>
                <p>
                Omojesu Children Global Initiative envisions a world where every child, regardless of background, has access to education, empowerment, and opportunities to thrive.
                </p>
                <Link to='/about'><button className='about-us-button'>Learn more</button></Link>
            </div>
        </div>
    )
}

export default Mandate