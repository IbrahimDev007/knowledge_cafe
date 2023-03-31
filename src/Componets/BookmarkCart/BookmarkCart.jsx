import React from 'react';

const BookmarkCart = ({times}) => {
    
    return (
        <div className=' bg-slate-200 col-span-2  w-full'>
            <div className='bg-violet-400 flex justify-center items-center border-solid border-violet-900  m-3 h-10 text-violet-800 text-md '>
             Spent Time on read {times}
            </div>
            <h1 className='text-md'>Bookmark Blogs:</h1>
            <div>
            <div className=' m-3 h-10 text-black flex justify-center items-center  bg-white textarea-md '>
      Spent Time on read
            </div> 
            </div>
        </div>
    );
};

export default BookmarkCart;