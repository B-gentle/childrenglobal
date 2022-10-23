import React from 'react';
import { gallery } from '../../data';
import Feedback from '../feedback/Feedback';
import './gallery.css';

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="container">
        <h3>Gallery</h3>
        <h2>Amazing projects we have done</h2>
        <section>
            {gallery && gallery.map((image, id)=>{
                return <div key={id}>
                    <img src={image.img} alt=''/>
                    <span>{image.text}</span>
                </div>
            })}
        </section>
        </div>
        <Feedback text='Contact us to make inquires and become a volunteer helping others.' link='/contact' button='Contact Us'/>
    </div>
  )
}

export default Gallery