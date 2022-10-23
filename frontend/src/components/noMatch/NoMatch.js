import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './noMatch.css';

const NoMatch = () => {
  return (
    <div className='error-page'>
      <div>
        <div className="container">
          <h2>404</h2>
          <h3>Page not found</h3>
          <button className='error-button'><Link to='/'>Back to home page</Link></button>
        </div>
      </div>
      <img src={logo} alt='' />
    </div>

  )
}

export default NoMatch