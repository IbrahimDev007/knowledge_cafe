import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Data = (props) => {
	const { images, publish_date, read_time, author, blog_title } = props.data;
	const handleClickTime = props.handleClickTime;
	const handleClickTitle = props.handleClickTitle;

	return (
		<div className="m-4 p-4">
			<img src={images.blog_cover_image} alt="" className="w-full  " />
			<div className="flex  justify-between">
				<div className="flex items-center justify-center">
					<img
						src={images.author_image}
						alt=""
						className="rounded-full w-20 h-20 my-2 mx-1"
					/>
					<div>
						<p className="text-lg">{author.name}</p>
						<br />
						<p className="text-sm text-slate-600">{publish_date}</p>
					</div>
				</div>
				<div className="flex">
					<div
						className="text-sm text-slate-600 p-2 hover:bg-slate-300 h-fit "
						onClick={() => handleClickTime(read_time)}
					>
						{read_time} min read
					</div>
					<FontAwesomeIcon
						icon={faBookmark}
						onClick={() => handleClickTitle(blog_title)}
						className="mx-5 p-2 hover:bg-orange-300"
					/>
				</div>
			</div>
			<h4 className="text-5xl py-2">{blog_title}</h4>
			<p className="my-2">#pogramming #code</p>
			<a className="text-violet-800 underline underline-offset-4">
				Mark as read
			</a>
		</div>
	);
};

export default Data;
