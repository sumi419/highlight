import React from 'react';

const Product = (props) => {
	//	const { name, brand, product_link, image_link, price } = props.product;
	console.log(props.match.params.id);
	const product = props.products.find((product) => `${product.id}` === props.match.params.id);
	console.log(product);
	const singleProduct = product;
	// console.log(singleProduct[0].id);
	// const { name, brand, product_link, image_link, price } = product;

	return <div>{product.brand}</div>;
};

export default Product;
