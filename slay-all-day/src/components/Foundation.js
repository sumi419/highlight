import React from 'react';
import axios from 'axios';

class Foundation extends React.Component {
	state = {
		products: []
	};

	componentDidMount() {
		const api = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation';
		axios
			.get(api)
			.then((res) => {
				console.log(res.data);
				this.setState({ products: res.data });
			})
			.catch((err) => console.error(err));
	}

	render() {
		return (
			<div className='products-list'>
				{this.state.products.map((product) => (
					<div key={product.id} className='products-card'>
						<h1>{product.name}</h1>
						<div>
							<p>{product.brand} unit</p>
							<p>{product.product_link}</p>
							<img src={product.image_link} alt='product-img' />
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default Foundation;
