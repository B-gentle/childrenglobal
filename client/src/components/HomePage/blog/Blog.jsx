import React from 'react';
import Cards from './BlogCard';
import { blogs } from '../../../data';
import { useMediaPredicate } from "react-media-hook";
import { Link } from 'react-router';
import './blog.css';

const Blog = ({ preview }) => {
  const media = useMediaPredicate("(max-width: 580px)")
  return (
    <div className='blog'>
      <h3>Get Involved</h3>
      <section>
       {
         !media && <p>
         Catch up on the latest news and updates. People around the world are passionate about giving because every charitable act makes a difference.
       </p>
       } 

       {
         media && <p>
         Catch up on the latest news and updates.
       </p>
       }
        <Link to='/blog' className='view-all'>View all</Link>
      </section>

      <div className='blog-cards'>
        {
          blogs && preview.map((blog, id) => {
            return <Cards
            key={id}
            img = {blog.img}
            date= 'September 26, 2022'
            title={blog.title}
            content={blog.content}
            />
          })
        }
      </div>
    </div>
  );
}


export default Blog
