import React from 'react';

const Product = (props) => {
	//	const { name, brand, product_link, image_link, price } = props.product;
	console.log(props.match.params.id);
	const product = props.products.find((product) => `${product.id}` === props.match.params.id);
	console.log(product);
	// const singleProduct = product;
	// console.log(singleProduct[0].id);
	// const { name, brand, product_link, image_link, price } = product;
	// const newProduct = (product ?
	// <div>
	// <h1>{product.name}</h1>
	// <div>
	// 	<p>{product.brand}</p>
	// 	<p>{product.product_link}</p>
	// 	<img src={product.image_link} alt='product-img' />
	// </div>
	// </div> ) :('123')
	let newProduct;
	if (product) {
		newProduct = (
			<div>
				<div className='product-wrapper'>
					<div>
						<a href={product.product_link}>
							<img src={product.image_link} alt='product-img' />
						</a>
					</div>
					<div className='product-info'>
						<h1>{product.brand}</h1>
						<p>{product.name}</p>
						<p>${product.price}0</p>
						<div className='buttons'>
							<div>
								<button>Add to basket 🛍</button>
							</div>
							<div>
								<button>Add to Loves 💖</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		newProduct = <h1>Loading...</h1>;
	}
	console.log(newProduct);
	return <div>{newProduct}</div>;
};

export default Product;
