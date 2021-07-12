import React from "react";
import productData from "./product_data";
import Product from "./components/Product";

function App() {
	const productComponents = productData.map((product) => {
		return <Product id={product.id} name={product.name} price={product.price} description={product.description} />;
	});
	return <ol>{productComponents}</ol>;
}

export default App;
