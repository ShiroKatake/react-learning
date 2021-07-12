import React from "react";

function Product(props) {
	return (
		<li>
			<h2>Product name: {props.name}</h2>
			<p>ID: {props.id}</p>
			<p>Price: {props.price}</p>
			<p>Description: {props.description}</p>
			<hr />
		</li>
	);
}

export default Product;
