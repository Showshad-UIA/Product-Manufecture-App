import React from "react";

import Products from "../Products/Products";
import Progress from "../Progress/Progress";
import Reviews from "../Reviews/Reviews";

import Banner from "./Banner";

const Home = () => {
	return (
		<div className="px-12">
			<Banner></Banner>
			<Products></Products>
			<Reviews></Reviews>
			<Progress></Progress>
		</div>
	);
};

export default Home;
