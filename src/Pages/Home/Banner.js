// import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner from "../../Asset/Background (31).png";

const Banner = () => {
	// const [index, setIndex] = useState(0);

	// const handleSelect = (selectedIndex, e) => {
	// 	setIndex(selectedIndex);
	// };

	return (
		<img
			className="d-block px-6 w-100 "
			style={{ height: 600, width: 1400 }}
			src={banner}
			alt="First slide"
		/>
	);
};

export default Banner;
