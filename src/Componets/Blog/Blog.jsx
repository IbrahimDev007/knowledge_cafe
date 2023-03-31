import React, { useState,useEffect } from 'react';
import BlogContent from '../BlogContent/BlogContent';
import BookmarkCart from '../BookmarkCart/BookmarkCart';


const Blog = () => {
    const [blog, setBlog] = useState([]);
useEffect(() => {
  fetch('/public/db.json')
  .then(res=>res.json())
  .then(data=>setBlog(data))

}, [])
    return (
       <div className="grid grid-cols-12 gap-2">
     <BlogContent blog={blog}  />
     <BookmarkCart  />
       </div>
    );
};

export default Blog;