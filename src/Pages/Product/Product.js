import React from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";
const Product = (props) => {
	const {
		_id,
		name,
		price,
		minimum_order_quantity,
		available_quantity,
		img,
		description,
	} = props.product;
	const navigate = useNavigate();
	const itemDetails = () => {
		const path = `/parchase/${_id}`;
		navigate(path);
	};
	return (
		// <div className="product px-12">
		// 	<img className="justify-content-center" src={img} alt="" />

		// 	<h2>Name:{name}</h2>
		// 	<h5>Price:{price}</h5>
		// 	<h5>Minimum_order_quantity:{minimum_order_quantity}</h5>
		// 	<h5>Available_order_quantity:{available_quantity}</h5>
		// 	<p>Description:{description}</p>

		// 	<button className="btn btn-primary text-white" onClick={itemDetails}>
		// 		Buy Now
		// 	</button>
		// </div>
		<div class="card  bg-base-100 shadow-xl">
			<figure class="px-10 pt-10">
				<img src={img} alt="Shoes" class="rounded-xl" />
			</figure>
			<div class="card-body items-center text-center">
				<h2>Name:{name}</h2>
				<h5>Price:{price}</h5>
				<h5>Minimum_order_quantity:{minimum_order_quantity}</h5>
				<h5>Available_order_quantity:{available_quantity}</h5>
				<p>Description:{description}</p>
				<button className="btn btn-primary text-white" onClick={itemDetails}>
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default Product;
