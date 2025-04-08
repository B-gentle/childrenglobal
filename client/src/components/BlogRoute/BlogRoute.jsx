import React from 'react'
import Blog from '../HomePage/blog/Blog';
import { blogs } from '../../data';

const BlogRoute = () => {
  return (
    <div>
        <Blog preview={blogs}/>
    </div>
  )
}

export default BlogRoute