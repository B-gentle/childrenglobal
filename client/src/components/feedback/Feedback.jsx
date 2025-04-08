import React from 'react';
import {Link} from 'react-router';
import './feedback.css'

const Feedback = ({text, button, link}) => {
    return (
        <div className='feedback'>
                <h2>We'ld love to hear from you</h2>
                <p>Looking for a charity to support? <span>{text}</span></p>
                <Link to={link}>
                    <button className='feedback-button'>{button}</button>
                    </Link>
        </div>
    )
}

export default Feedback