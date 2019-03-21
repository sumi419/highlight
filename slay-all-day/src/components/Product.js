import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
	button: {
		margin: theme.spacing.unit
	},
	input: {
		display: 'none'
	}
});

const Product = (props) => {
	//	const { name, brand, product_link, image_link, price } = props.product;
	console.log(props.match.params.id);
	const product = props.products.find((product) => `${product.id}` === props.match.params.id);
	console.log(product);
	const { classes } = props;
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
						<a href={product.product_link}>
							<h1>{product.brand}</h1>
							<p>{product.name}</p>
						</a>
						<p>${product.price}0</p>
						<div className='buttons'>
							<div>
								<Button variant='contained' color='secondary' className={classes.button}>
									Add to basket 🛍
								</Button>
							</div>
							<div>
								<Button variant='contained' color='secondary' className={classes.button}>
									Add to Loves 💖
								</Button>
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

Product.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);

// export default Product;
