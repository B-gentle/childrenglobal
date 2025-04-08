import React from 'react';
import './blog.css';

const BlogCard = ({ title, date, img, content }) => {
  return (
    <div className='card'>
      <div className='img-div'>
        <img src={img} alt='' />
      </div>
      <div className='content-div'>
        <span>{date}</span>
        <span>{title}</span>
        <span>{content}</span>
      </div>

    </div>
  )
}

export default BlogCard