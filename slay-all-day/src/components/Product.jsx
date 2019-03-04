import React from 'react';

const Product = (props) => {
	return (
		<div>
			<h1>{props.product.name}</h1>
			<div>
				<p>{props.product.brand}</p>
				<p>{props.product.product_link}</p>
				<img src={props.product.image_link} alt='product-img' />
			</div>
		</div>
	);
};

export default Product;
