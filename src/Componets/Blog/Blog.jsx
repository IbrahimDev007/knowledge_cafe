import React, { useState,useEffect } from 'react';
import BlogContent from '../BlogContent/BlogContent';
import BookmarkCart from '../BookmarkCart/BookmarkCart';


const Blog = () => {
    const [blog, setBlog] = useState([]);
    const [times, settimes] = useState(0);
useEffect(() => {
  fetch('/public/db.json')
  .then(res=>res.json())
  .then(data=>setBlog(data))

}, [])

	const handleClickTime = (real_time) => {
		const time = times + real_time;
        settimes(time);  
	};
    return (
       <div className="grid grid-cols-12 gap-2">
    
     <BlogContent blog={blog} handleClickTime={handleClickTime} />
     <BookmarkCart times={times} />
       </div>
    );
};

export default Blog;