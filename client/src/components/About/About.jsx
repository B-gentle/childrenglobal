import React, { useEffect } from 'react';
import about from '../../assets/JulyAbout.jpeg';
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
                <h2>Our Purpose</h2>
                <p>
                Omojesu Children Global Initiative exists to empower and uplift children and youth worldwide by providing education, resources, and opportunities. Our aim is to break down barriers and create a nurturing environment where every young person can thrive and achieve their full potential. Through targeted charity programs, educational support, and impactful media campaigns, we seek to inspire positive change and foster a brighter future for children from all walks of life.
                </p>
                <div className='mvm-statement'>
                    <div>
                        <h3>Our Vision</h3>
                        <p>Omojesu Children Global Initiative envisions a world where every child, regardless of background, has access to education, empowerment, and opportunities to thrive</p>
                    </div>
                    <div>
                        <h3>Our Mission</h3>
                        <p>Our mission is to empower children, teenagers, and young adults through targeted charity initiatives, educational programs, and impactful media campaigns. We aim to inspire and equip the next generation with the skills and resources they need to succeed.</p>
                    </div>
                    <div>
                        <h3>Our Mandate</h3>
                        <p>To create meaningful opportunities for every child to succeed by providing access to education, empowerment programs, and essential resources. We are dedicated to driving positive change through community engagement, advocacy, and innovative initiatives, ensuring that no child is left behind in their journey toward a brighter future.</p>
                    </div>
                </div>
            </div>
            <Feedback text='Leave your mark on this world by giving a donation' button='Donate' />
        </div>
    )
}

export default About