import React from 'react';
import BlogContent from '../BlogContent/BlogContent';
import BookmarkCart from '../BookmarkCart/BookmarkCart';

const Blog = () => {
    return (
       <div className="grid grid-cols-12 gap-2">
     <BlogContent  />
     <BookmarkCart  />
       </div>
    );
};

export default Blog;