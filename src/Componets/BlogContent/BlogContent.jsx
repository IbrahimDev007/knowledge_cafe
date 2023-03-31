import React from 'react';

import Data from '../Data/Data';

const BlogContent = (props) => {
 const {blog}=props;
 const handleClickTime=props.handleClickTime;
    return (
        <div className='m-4 col-span-8 p-2'>
            {
                blog.map(
                (item)=><Data  key={item.id}data={item} handleClickTime={handleClickTime}/>
                )
            }
        </div>
    );
};

export default BlogContent;