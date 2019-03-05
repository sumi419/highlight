import React, { Component } from 'react';
import axios from 'axios';
import ProductsList from './ProductsList';
import NavBar from './NavBar';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
	}
	componentDidMount() {
		const api = 'http://makeup-api.herokuapp.com/api/v1/';
		axios
			.get(`${api}products.json`)
			.then((res) => {
				console.log(res.data);
				// console.log(res.status);
				this.setState({ products: res.data });
				// this.setState({ products: [...this.state.products, ...data.results] });
			})
			.catch((err) => console.error(err));
	}

	render() {
		return (
			<div className='App'>
				<NavBar />
				<ProductsList products={this.state.products} />
			</div>
		);
	}
}

export default Home;

// <Route exact path='/foundation' render={() => <Foundation />} />
