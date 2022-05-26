import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./products.css";

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/tools")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div className="my-28">
			<div className="text-center">
				<h2 className="text-primary text-4xl mb-5">On Stock Tools </h2>
			</div>
			<div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
				{products.map((product) => (
					<Product key={product.id} product={product}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
