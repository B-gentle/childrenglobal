import React from 'react';
import { LinearProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QandA1 from '../../../assets/Q&A1.jpg';
import QandA2 from '../../../assets/Q&A2.jpg';
import campaign2 from '../../../assets/campaign2.png';
import './event.css'
import ContactForm from '../contact/ContactForm';

const Events = () => {
    return (
        <div className='events'>
            <h3>Exclusive Campaign</h3>
            <h2>Let's Achieve Change Together Through the Gift of Giving</h2>
            <Swiper
            slidesPerView={1}
            className='red'>
                <SwiperSlide>
                    <div className='event-slide conversation'>
                        <div>
                            <img
                                src={QandA2}
                                alt="First slide"
                            />
                            <span>Share on <FaFacebook /> <FaInstagram /> <FaTwitter /> </span>
                        </div>
                            <ContactForm heading="Let's hear from you"/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='event-slide'>
                        <img
                            src={campaign2}
                            alt="First slide"
                        />
                        <div className='text'>
                            <h4>EDUCATION</h4>
                            <h3>Helping Hands for the Homeless</h3>
                            <p>
                                People who are homeless are not social inadequates, they are people without homes. We seek for help for the homeless from you all as we help non profits access the funding, tools, trainings which they need. Help children grow in their relationship with Jesus and with one another.
                                One random act of kindness could be the difference between life and death. Save a life today!
                            </p>
                            <p><span>$25 </span>of $2000 goal</p>
                            <LinearProgress
                                sx={{
                                    borderRadius: '8px',
                                    marginBottom: '2rem'
                                }}
                                variant="determinate"
                                color='success'
                                value={25}
                            />
                            <div className='events-button-group'>
                                <button className='support-event-button'>Donate Now</button>
                                <span>Share on <FaFacebook /> <FaInstagram /> <FaTwitter /> </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='event-slide conversation'>
                        <img
                            src={QandA1}
                            alt="First slide"
                        />
                        <span>Share on <FaFacebook /> <FaInstagram /> <FaTwitter /> </span>
                        <ContactForm heading="Let's hear from you" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Events