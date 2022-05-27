import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
const Parchase = () => {
	const numberRef = useRef();
	const { _Id } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		fetch(`http://localhost:5000/products/${_Id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [_Id]);

	const handleDeliveredToQuantity = (id) => {
		const url = `http://localhost:5000/products/${_Id}`;

		if (product.quantity > 0) {
			product.quantity = product.quantity - 1;
			setProduct({ ...product });
		} else {
			alert("add product");
		}
		const quantities = product.quantity;
		console.log(quantities);
		//update Quantity

		fetch(url, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ quantities: quantities }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				product.quantity = quantities;
				setProduct({ ...product });
			});
	};

	const handleAddQuantity = (id) => {
		const url = `http://localhost:5000/products/${id}`;
		const currentQuantity = parseInt(numberRef.current.value);
		let previousQuantity = parseInt(product.quantity);
		if (previousQuantity > 0) {
			product.quantity = previousQuantity + currentQuantity;
			setProduct({ ...product });
		} else {
			alert("add product");
		}
		const quantities = product.quantity;
		console.log(quantities);
		//update Quantity

		fetch(url, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ quantities: quantities }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				product.quantity = quantities;
				setProduct({ ...product });
			});
	};

	return (
		<div className="h-75 bg-secondary">
			<h1 className="text-center">Product name: {product.name}</h1>

			<div className="row">
				<div className="col-md-6">
					<div className="card mx-auto product g-4 w-50">
						<img
							style={{ height: "150px", width: "150px" }}
							src={product.img}
							alt=""
						/>
						<h5> Name:{product.name}</h5>
						<p className="mt-0">{product.description}</p>
						<h5 className="mt-0">Price:${product.price}</h5>
						<p className="mt-0">Quantity:{product.quantity}</p>
						<p className="mt-0">Supplier:{product.supplier}</p>
						<p className="sold">Sold</p>
						<button
							onClick={() => handleDeliveredToQuantity(product._id)}
							className="btn btn-primary"
						>
							Delivered
						</button>
					</div>
				</div>
				<div className="col-md-6">
					<form onSubmit={() => handleAddQuantity(product._id)}>
						<input ref={numberRef} type="number" placeholder="Add Quantity" />
						<br />

						<button className="btn btn-primary mt-2">Add Quantity</button>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Parchase;
