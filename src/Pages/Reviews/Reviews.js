import React from "react";
import img1 from "../../Asset/review 1.png";
import img2 from "../../Asset/review 2.png";
import img3 from "../../Asset/review 3.png";
import Review from "../Review/Review";

const Reviews = () => {
	const reviews = [
		{
			_id: 1,
			name: "Robert",
			rating: "*****",
			img: img1,
			Position: "CEO-Expert.com",
		},
		{
			_id: 2,
			name: "Jemmy",
			rating: "****",
			img: img2,
			Position: "Technical expert",
		},
		{
			_id: 3,
			name: "Clark",
			rating: "*****",
			img: img3,
			Position: "Manager-HostDB",
		},
	];
	return (
		<div className="px-12">
			<h1 className="text-center  text-4xl mb-3 text-black text-bold">
				{" "}
				Reviews
			</h1>
			<div className="divider"></div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
				{reviews.map((review) => (
					<Review key={review._id} review={review}></Review>
				))}
			</div>
		</div>
	);
};

export default Reviews;
