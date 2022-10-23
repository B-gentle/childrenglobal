import React, {useState} from 'react';
import {Link, useLocation}  from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';
import './navbar.css';
import logo from '../../assets/nav-logo.png';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  const location = useLocation();
  const [click, setClick] = useState(false)

  const handleClick = ()=>{
    setClick(!click)
  }
  return (
    <nav style={{padding: location.pathname === '/' && '0'}}>
      <div>
        <Link to='/'><img src={logo} alt='logo' /></Link>
        
      </div>
      <div onClick={handleClick} className='nav-icons'>
        <span className={ click ? 'open-nav hide' : 'open-nav'}><FaBars /></span>
        <span className={ click ? 'close-nav': 'close-nav hide'}><GrClose /></span>
      </div>
      <ul onClick={handleClick} className={ click ? 'show' : ''}>
       <Link className='nav-links' to='/'>Home</Link> 
        <Link className='nav-links' to='/about'>About</Link>
        <Scroll to='services' spy={true} smooth={true} className='nav-links'>Services</Scroll>
        <Scroll to='events' spy={true} smooth={true} className='nav-links'>Event</Scroll>
        <Link className='nav-links' to='/contact'>Contact</Link>
        <button className='nav-button'>Donate</button>
      </ul>
    </nav>
  )
}

export default Navbar