import React from "react";
import img1 from "../../Asset/review 1.png";
import img2 from "../../Asset/review 1.png";
import img3 from "../../Asset/review 1.png";
import Review from "../Review/Review";

const Reviews = () => {
	const reviews = [
		{
			_id: 1,
			name: "Robert",
			rating: "good",
			img: img2,
		},
		{
			_id: 2,
			name: "Robert",
			rating: "good",
			img: img3,
		},
		{
			_id: 3,
			name: "Robert",
			rating: "good",
			img: img3,
		},
	];
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
			{reviews.map((review) => (
				<Review key={review._id} review={review}></Review>
			))}
		</div>
	);
};

export default Reviews;
