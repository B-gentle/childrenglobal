import React from 'react';
import './footer.css';
import logo from '../../assets/footer-logo.jpg';
import {Link} from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const date = new Date().getFullYear();
  return (
      <footer>
    <div className='footer'>
        <div className='lhs-footer'>
            <img src={logo} alt=''/>
            <p>
                Our vision is to reach out to the over 2 billion children in the world, empowering and influencing them with the knowledge and love of God. Nurturing them into a loving, serving relationship with God and humanity.
            </p>
            <span>
                <FaFacebook/>
                <a href='https://www.instagram.com/children_global/'><FaInstagram/></a>
                <a href='https://twitter.com/childrenglo_bal'><FaTwitter/></a>
            </span>
        </div>
        <div className='rhs-footer'>
            <section>
                <h4>Company</h4>
                <Link className='footer-link' to='/'>Home</Link>
                <Link className='footer-link' to='/about'>About Us</Link>
                <Scroll to='services' spy={true} smooth={true} className='footer-link'>Services</Scroll>
                <Scroll to='events' spy={true} smooth={true} className='footer-link'>Events</Scroll>
                <Link className='footer-link' to='/contact'>Contact</Link>
            </section>
            <section>
                <h4>Services</h4>
                <span>Education</span>
                <span>Medical</span>
                <span>Child Counselling</span>
                <span>Healthy Food</span>
                <span>Professional Skills</span>
                <span>Donations</span>
            </section>
            <section>
                <h4>Quick Links</h4>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </section>
        </div>
    </div>
    <p>Copyright {date} - Childrenglobal Developed by BeeTech. All Rights Reserved</p>
    </footer>
  )
}

export default Footer