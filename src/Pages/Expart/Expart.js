import React from "react";
import expert from "../../Asset/tech.jpeg";

const Expart = () => {
	return (
		<div className="px-12">
			<h1 className="text-black  mt-5 text-4xl text-center">
				Meet With Expert
			</h1>
			<div className="divider"></div>
			<div class="px-12 bg-base-200 rounded-xl">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<img src={expert} class="max-w-sm rounded-lg shadow-2xl" />
					<div>
						<h1 class="text-5xl font-bold">Book Now!</h1>
						<p class="py-6">
							Get the latest update and info about car and bike best rating
							prices of car ask any question the ans will upto you within an
							hour.. happy driving 🙂
						</p>
						<button class="btn btn-primary">Details</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Expart;
