import React, { useState, useEffect } from "react";
import BlogContent from "../BlogContent/BlogContent";
import BookmarkCart from "../BookmarkCart/BookmarkCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
	const [blog, setBlog] = useState([]);
	const [times, settimes] = useState(0);
	const [titles, setTitles] = useState([]);
	useEffect(() => {
		fetch("db.json")
			.then((res) => res.json())
			.then((data) => setBlog(data));
	}, []);

	const handleClickTitle = (real_title) => {
        const exact=titles.find((title) => title === real_title);
		if (exact) {
            toast("You Have Already Bookmarked This Blog!");
          const title = [...titles, real_title];
          setTitles(title);
        
		} else {
			const title = [...titles, real_title];
			setTitles(title);
			
		}
	};

	const handleClickTime = (real_time) => {
		const time = times + real_time;
		settimes(time);
	};
	return (
		<div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2">
			<BlogContent
				blog={blog}
				handleClickTime={handleClickTime}
				handleClickTitle={handleClickTitle}
			/>
			<BookmarkCart times={times} titles={titles} />
            <ToastContainer />
		</div>
	);
};

export default Blog;
