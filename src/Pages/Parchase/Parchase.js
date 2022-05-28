import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Parchase = () => {
	const orderRef = useRef();
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState({});
	const [user] = useAuthState(auth);
	useEffect(() => {
		fetch(`http://localhost:5000/tools/${id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [id]);

	const handleMinus = (e) => {
		e.preventDefault();
		let minus = orderRef.current.value;
		const countValue = `${product.availableQuantity}`;
		if (minus > countValue) {
			minus = countValue - 1;
		}
	};
	const handleOrder = (e) => {
		const orderCount = orderRef.current.value;
		const orders = {
			productId: product.id,
			productName: product.name,
			productPrice: product.price,
			productOrder: orderCount,
			productPurchase: user.email,
		};
		fetch("https://trevel-hardware.herokuapp.com/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(orders),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				toast("Your order is confirm");
				navigate("/dashBoard");
			});
	};
	return (
		<div className="">
			<div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-2">
				<div className="hero  ">
					<div className="hero-content flex-col lg:flex-row">
						<img
							src={product.img}
							className="max-w-sm rounded-lg shadow-2xl"
							alt=""
						/>
					</div>
				</div>
				<div className="mt-20">
					<h1 className="text-2xl font-bold">{product.name}</h1>
					<p>{product.description}</p>
					<h2 className="font-bold text-xl">Price: ${product.price}</h2>
					<h2 className="font-bold text-xl">
						Available Quantity: {product.available_quantity} Pice
					</h2>
					<h2 className="font-bold text-xl">
						Available Quantity: {product.minimum_order_quantity} Pice
					</h2>
				</div>
				<div className="flex gap-4">
					<button onClick={handleMinus} className="ms-6">
						<FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
					</button>

					<input
						ref={orderRef}
						min="0"
						className="form-control w-12 h-10 my-32 bg-[#F6F5FA]"
						type="number"
						value={product.minQuantity}
					/>
					<button>
						<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
					</button>
				</div>
			</div>
			<button onClick={handleOrder} className="btn btn-primary">
				Confirm order
			</button>
		</div>
	);
};

export default Parchase;
