import React from "react";

const Review = ({ review }) => {
	return (
		<div>
			<div class="card lg:max-w-lg  mb-5  bg-base-100 shadow-xl">
				<div class="card-body flex">
					<div className="flex items-center">
						<div class="avatar ">
							<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-10">
								<img src={review.img} alt="reviewer" />
							</div>
						</div>
						<div>
							<h3 className="text-xl">{review.name}</h3>
							<h3 className="text-xl">
								<img src={review.rating} alt="" />
							</h3>
							<h3 className="text-xl">{review.Position}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
