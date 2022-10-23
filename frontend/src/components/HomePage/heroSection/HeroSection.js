import React from 'react'
import Navbar from '../../navbar/Navbar';
import PurposeAndGallery from './purposeAndGallery/PurposeAndGallery';
import './heroSection.css';


const HeroSection = () => {
  return (
    <section className='hero-section'>
        <Navbar/>
        <PurposeAndGallery/>
    </section>
  )
}

export default HeroSection