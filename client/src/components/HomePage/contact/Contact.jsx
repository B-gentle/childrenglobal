import React from 'react';
import { MdEmail, MdWifiCalling3 } from 'react-icons/md';
import './contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
    
   
    return (
        <div className='contact'>
            <div className='contact-details'>
                <h3>Contact Us</h3>
                <h2>We'ld love to hear from you</h2>
                <p>
                Looking for a charity to support? Contact us to make inquires and become a volunteer helping others.
                </p>
                <section>
                    <h3>Get In Touch</h3>
                    <div>
                        <a className='contact-icon' href='https://childrenglobal.org@gmail.com'><MdEmail /></a>
                        <main>
                            <h5>Email Address</h5>
                            <a href='https://childrenglobal.org@gmail.com'>childrenglobal.org@gmail.com</a>
                        </main>
                    </div>
                    <div>
                        <a href='tel:+2348136484974'><MdWifiCalling3 /></a>
                        <main>
                            <h5>Phone Number</h5>
                            <a href='tel:+2348136663673'>+234-8136-663-673</a>
                        </main>
                    </div>
                </section>
            </div>

            <ContactForm heading='Please fill the form'/>
        </div >
    )
}

export default Contact