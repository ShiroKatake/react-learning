import React from "react";

function Product(props) {
	return (
		<li>
			<h2>{props.elements.name}</h2>
			<p>{props.elements.price}</p>
			<p>{props.elements.description}</p>
			<hr />
		</li>
	);
}

export default Product;
