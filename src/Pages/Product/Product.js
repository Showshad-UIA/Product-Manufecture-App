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

	const itemDetails = (id) => {
		const path = `/parchase/${id}`;
		navigate(path);
	};
	return (
		<div className=" lg:max-w-lg  shadow-xl card-section">
			<figure>
				<img src={img} alt="" />
			</figure>
			<div className="card-body  ">
				<h2 className="text-2xl font-bold text-center">{name}</h2>
				<p>{description}</p>
				<p>Available quantity: {available_quantity} Pice</p>
				<p>Minimum Order: {minimum_order_quantity} pice</p>
				<p className="font-bold text-xl">Price per pice: ${price}</p>
				<div className="card-actions justify-center">
					<button onClick={() => itemDetails(_id)} className="btn btn-primary">
						Order Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
