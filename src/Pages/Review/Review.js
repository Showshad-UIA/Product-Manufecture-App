import React from "react";

const Review = ({ review }) => {
	return (
		<div class="card lg:max-w-lg  mb-5  bg-base-100 shadow-xl">
			<div class="card-body flex">
				<div className="flex items-center">
					<div class="avatar ">
						<div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
							<img src={review.img} alt="reviewer" />
						</div>
					</div>
					<div>
						<h3 className="text-xl">{review.name}</h3>
						<h3 className="text-xl">Ratings:{review.ratings}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
