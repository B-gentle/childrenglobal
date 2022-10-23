import React from 'react';
import './services.css';
import ServiceCard from './ServicesCard';
import { services } from '../../../data';

const Message = () => {

  return (
    <div className='services'>
        <h3>Our Services</h3>
        <h2>We Provide Unique Services</h2>
        <div className='service-container'>
            {services && services.map((service, id)=> 
            <div key={id}>
                <ServiceCard icon={<service.icon/>} header={service.header} message={service.message} />
            </div>
            )}
        </div>

    </div>
  )
}

export default Message