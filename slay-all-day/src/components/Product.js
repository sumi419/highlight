import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Emoji from './Emoji';
const styles = (theme) => ({
	button: {
		margin: theme.spacing.unit
	},
	input: {
		display: 'none'
	}
});

class Product extends React.Component {
	//	const { name, brand, product_link, image_link, price } = props.product;
	state = {
		loves: []
	};
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

	handleAddLove = () => {
		//
	};

	render() {
		console.log(this.props.match.params.id);
		const product = this.props.products.find((item) => `${item.id}` === this.props.match.params.id);
		console.log(product);
		const { classes } = this.props;
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
										Add to basket <Emoji symbol='🛍' label='shopping-basket' />
									</Button>
								</div>
								<div>
									<Button
										variant='contained'
										color='secondary'
										className={classes.button}
										onClick={() => this.handleAddLove()}>
										Add to Loves <Emoji symbol='💖' label='sparkling-heart' />
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
	}
}

Product.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);

// export default Product;
