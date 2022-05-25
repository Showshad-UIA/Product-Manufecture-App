import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./products.css";

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/tools")
			.then((res) => res.json())
			.then((data) => setProducts(data));
		console.log("data");
	}, []);
	return (
		<div>
			<h2 className="text-center mt-5 my-5 font-bold">Feature Product</h2>
			<div className="product-container mx-12">
				{products.map((product) => (
					<Product key={product.id} product={product}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
