import React from 'react';
import CustomNavbar from '../components/navbar';
import Blog_hero from './blogpage/blog_hero';
import Blog_contents from './blogpage/blog_contents';
const Blog = () => {
  return (
    <div>
     <CustomNavbar />
    <Blog_hero/>
    <Blog_contents/>

    </div>
  );
};

export default Blog;
