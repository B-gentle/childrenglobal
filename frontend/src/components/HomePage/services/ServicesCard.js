import React, { useState} from 'react';
import './servicesCard.css';

const TheMessage = ({icon, header, message}) => {
  const [hover, setHover] = useState(false)
  return (
    <div className='services-card' onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} style={{backgroundColor : hover ? '#0FA716' : "" }}>
        <span style={{backgroundColor : hover ? '#FAFF02' : ''}}>{icon}</span>
        <h3 style={{color: hover ? '#FFFFFF' : ''}}>{header}</h3>
        <p style={{color: hover ? '#FFFFFFBF' : ''}}>{message}</p>
    </div>
  )
}

export default TheMessage