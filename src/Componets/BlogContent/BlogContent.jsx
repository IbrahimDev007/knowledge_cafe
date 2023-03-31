import React from 'react';

import Data from '../Data/Data';

const BlogContent = ({blog}) => {
  
    return (
        <div className='m-4 col-span-8 p-2'>
            {
                blog.map(
                (item)=><Data  key={item.id}data={item}/>
                )
            }
        </div>
    );
};

export default BlogContent;