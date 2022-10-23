import React, { useEffect } from 'react';
import Contact from '../HomePage/contact/Contact';
import banner from '../../assets/contactRouteImg.JPG'
import './contactRoute.css';

const ContactRoute = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
            }, [])
    return (
        <div className='contactRoute'>
            <div className='container'><img src={banner} alt='contactRouteBanner'/></div>
            <Contact />
        </div>
    )
}

export default ContactRoute