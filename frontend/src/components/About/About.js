import React, { useEffect } from 'react';
import about from '../../assets/aboutUs.JPG';
import Feedback from '../feedback/Feedback';
import './about.css';

const About = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
            }, [])
    return (
        <div className='about-route'>
            <div className='container'>
                <img src={about} alt='' />
                <h3>About Us</h3>
                <h2>We strive to lead every child or parent that needs light to the ultimate source</h2>
                <p>
                    At Children global, our vision is to reach out to over two billion children in the world, privileged and less privileged, empowering them and impacting them with the knowledge and love of God; Nurture them in a loving and serving relationship with God and humanity. Parents have a duty to be good stewards of the children God has placed in their care. Loving God and his people is not just a matter for adults; By the time one reaches adulthood, the most firm convictions need to have taken root. Children need to learn about God and follow Him while they are young!
                </p>
                <div className='mvm-statement'>
                    <div>
                        <h3>Our Vision</h3>
                        <p>Our Vision is to raise Children across nations that would run over the globe with Christ as their priority, thereby achieving what eye have not seen, what ear has not heard and what has not entered into the heart of men; far beyond any human comprehension</p>
                    </div>
                    <div>
                        <h3>Our Mission</h3>
                        <p>At Children global, our mission is to raise a generation of children from every background in the way of the Lord Jesus Christ and send them across various platforms to fulfill their life purpose</p>
                    </div>
                    <div>
                        <h3>Our Mandate</h3>
                        <p>To give life to every child we interact with by birthing the light of Christ in them</p>
                    </div>
                </div>
            </div>
            <Feedback text='Leave your mark on this world by giving a donation' button='Donate' />
        </div>
    )
}

export default About