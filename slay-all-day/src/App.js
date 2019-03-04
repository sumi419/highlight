import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ProductsList from './components/ProductsList';
import NavBar from './components/NavBar';

class App extends Component {
	state = {
		products: []
	};

	componentDidMount() {
		const api = 'http://makeup-api.herokuapp.com/api/v1/';
		axios
			.get(`${api}products.json`)
			.then((res) => {
				console.log(res.data);
				this.setState({ products: res.data });
				// this.setState({ products: [...this.state.products, ...data.results] });
			})
			.catch((err) => console.error(err));
	}

	render() {
		return (
			<div className='App'>
				<NavBar />
				<div> Hello World </div>
				<ProductsList products={this.state.products} />
				<Foundation products={this.state.products} />
			</div>
		);
	}
}

export default App;
