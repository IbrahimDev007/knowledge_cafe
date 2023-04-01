import React, { useState, useEffect } from "react";
import BlogContent from "../BlogContent/BlogContent";
import BookmarkCart from "../BookmarkCart/BookmarkCart";

const Blog = () => {
	const [blog, setBlog] = useState([]);
	const [times, settimes] = useState(0);
	const [titles, setTitles] = useState([]);
	useEffect(() => {
		fetch("/public/db.json")
			.then((res) => res.json())
			.then((data) => setBlog(data));
	}, []);

	const handleClickTitle = (real_title) => {
        const exact=titles.find((title) => title === real_title);
		if (exact) {
			console.log(true);
		} else {
			const title = [...titles, real_title];
			setTitles(title);
			console.log(false);
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
		</div>
	);
};

export default Blog;
