import React from "react";
import notFound from "../../Asset/images.jpg";

const NotFound = () => {
	return (
		<div className="mt-5 mb-5">
			<img className="mx-auto" src={notFound} alt="" />
			<h2 className="text-4xl text-green-400 text-center">Please Try Again</h2>
		</div>
	);
};

export default NotFound;
