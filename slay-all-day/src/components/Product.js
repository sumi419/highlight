import React from 'react';

const Product = (props) => {
	const { name, brand, product_link, image_link, price } = props.product;
	return (
		<div>
			<h1>{name}</h1>
			<div>
				<p>{brand}</p>
				<p>${price}0</p>
				<a href={product_link}>
					<img src={image_link} alt='product-img' />
				</a>
			</div>
		</div>
	);
};

export default Product;
