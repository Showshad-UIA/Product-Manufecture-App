import React from "react";

import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Expart from "../Expart/Expart";

import Products from "../Products/Products";
import Progress from "../Progress/Progress";
import Reviews from "../Reviews/Reviews";

import Banner from "./Banner";

const Home = () => {
	useEffect(() => {
		if (document) {
			const stylesheet = document.createElement("link");
			stylesheet.rel = "stylesheet";
			stylesheet.href =
				"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

			document.head.appendChild(stylesheet);
		}
	}, []);
	return (
		<div className="px-12">
			<Banner></Banner>
			<Products></Products>
			<Reviews></Reviews>
			<Expart></Expart>
			<Progress></Progress>

			<div className="py-6">
				<ContactForm />
			</div>
		</div>
	);
};

export default Home;
