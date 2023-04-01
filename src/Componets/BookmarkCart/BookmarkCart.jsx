import React from "react";

const BookmarkCart = ({ times, titles }) => {
	return (
		<div className=" bg-slate-200 col-span-2  w-full">
			<div className="bg-violet-400 flex justify-center items-center border-solid border-violet-900  m-3 h-10 text-violet-800 text-md ">
				Spent Time on read {times}
			</div>
			<h1 className="text-md  m-3 h-10 text-blue-600 text-center">
				Bookmark Blogs:{titles.length}
			</h1>
			<div>
				{titles.map((title, id) => (
					<div
						className=" m-3 h-15 py-3 px-1 text-black flex justify-center items-center  bg-white text-md "
						key={id}
					>
						{title}
					</div>
				))}
			</div>
		</div>
	);
};

export default BookmarkCart;
