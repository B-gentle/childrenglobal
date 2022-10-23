import React from 'react';
import './aboutUs.css';
import aboutUs from '../../../assets/aboutUs.png';
import { Link } from 'react-router-dom';

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
                    At Children global, our vision is to reach out to over two billion children in the world, privileged and less privileged, empowering them and impacting them with the knowledge and love of God; Nurture them in a loving and serving relationship with God. Parents have a duty to be good stewards of the children God has placed in their care. Loving God and his people is not just a matter for adults; By the time one reaches adulthood, the most firm convictions need to have taken root. Children need to learn about God and follow Him while they are young!
                </p>
                <Link to='/about'><button className='about-us-button'>Learn more</button></Link>
            </div>
        </div>
    )
}

export default Mandate