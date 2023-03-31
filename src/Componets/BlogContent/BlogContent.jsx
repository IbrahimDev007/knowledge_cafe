import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const BlogContent = () => {
    return (
        <div className='m-4 col-span-8 p-2'>
            <img src="" alt="" className='w-full ' />
            <div className='flex  justify-between'>
              <div>
              <img src="" alt="" className='rounded-full w-10 h-10' />
                <div><p className='text-3xl'>Mr.Raju</p>
                    <br />
                  <p className='text-sm text-slate-600'>Mar 14 (4 day ago)</p>  
                </div>
                </div>
                <div>
                <p className='text-sm text-slate-600 '>5-min read
                <FontAwesomeIcon icon={faBookmark}  className="mx-5"/>
                </p>
                </div>
              
            </div>
            <h4 className='text-5xl'>hello</h4>
            <p>#tourist #tour</p>
            <a className='text-violet-800 underline underline-offset-4'>Mark as read</a>
        </div>
    );
};

export default BlogContent;