import React from "react";
import Footer from "../../Footer/Footer";
import Products from "../Products/Products";

import Banner from "./Banner";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
			<Footer></Footer>
		</div>
	);
};

export default Home;
