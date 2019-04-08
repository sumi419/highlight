import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Foundation from './components/ProductType/Foundation';
import Blush from './components/ProductType/Blush';
import Bronzer from './components/ProductType/Bronzer';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Eyebrows from './components/ProductType/Eyebrows';
import Eyeshadow from './components/ProductType/Eyeshadow';
import Eyeliner from './components/ProductType/Eyeliner';
import Mascara from './components/ProductType/Mascara';
import Lipstick from './components/ProductType/Lipstick';
import Product from './components/Product';
import Loading from './components/Loading';
import Footer from './components/ProductType/Footer';
import data from './data';

class App extends Component {
	state = {
		products: [],
		searchInput: '',
		filteredSearch: []
	};

	componentDidMount() {
		// const api = 'https://makeup-api.herokuapp.com/api/v1/products.json';
		// axios
		// 	.get(api)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 		this.setState({ products: res.data });
		// 	})
		// 	.catch((err) => console.error(err));
		// console.log(data.map((item) => this.setState({ products: item })));

		// filter out null values before I set them to state
		let products = data.filter(function(e) {
			return e.brand === 0 || e.brand;
		});
		this.setState({
			products: products
		});
	}

	handleSearchInput = (e) => {
		this.setState({
			searchInput: e.target.value
		});
	};

	handleClick = (e, product) => {
		e.preventDefault();
		console.log(product);
		console.log(e.target);
	};

	render() {
		return (
			<div className='App'>
				<NavBar
					searchInput={this.state.searchInput}
					filteredSearch={this.state.filteredSearch}
					handleSearchInput={this.handleSearchInput}
				/>
				{/*	
					Ternary Operator:
						a = 3
						b = 2
						if ( (a + b)  == 5 
							do something 
						else 
							do something else

					If logic has something to do, or do something else,
					ternary shorthand can be rewritten as evaluate expression,
					do something, and if not true, do something else
					(a+b == 5) ? do something : do something else

					
					{this.state.products ? (
					<Route exact path='/' component={Loading} />
				) : (
					<Route exact path='/' component={Home} />
				)}
				*/}
				<Route
					path='/products/:id'
					render={(props) => <Product products={this.state.products} {...props} />}
				/>
				<Route
					exact
					path='/'
					render={(props) => (
						<Home
							products={this.state.products}
							filteredSearch={this.state.filteredSearch}
							searchInput={this.state.searchInput.toLowerCase()}
							handleClick={this.handleClick}
						/>
					)}
				/>
				<Route
					exact
					path='/foundation'
					render={(props) => (
						<Foundation
							products={this.state.products}
							filteredSearch={this.state.filteredSearch}
							searchInput={this.state.searchInput}
						/>
					)}
				/>
				<Route
					exact
					path='/blush'
					render={(props) => (
						<Blush
							products={this.state.products}
							filteredSearch={this.state.filteredSearch}
							searchInput={this.state.searchInput}
						/>
					)}
				/>
				<Route
					exact
					path='/bronzer'
					render={(props) => (
						<Bronzer
							products={this.state.products}
							filteredSearch={this.state.filteredSearch}
							searchInput={this.state.searchInput}
						/>
					)}
				/>
				<Route
					exact
					path='/eyebrows'
					render={(props) => (
						<Eyebrows
							products={this.state.products}
							filteredSearch={this.state.filteredSearch}
							searchInput={this.state.searchInput}
						/>
					)}
				/>
				<Route
					exact
					path='/eyeshadow'
					render={(props) => (
						<Eyeshadow
							products={this.state.products}
							filteredSearch={this.state.filteredSearch}
							searchInput={this.state.searchInput}
						/>
					)}
				/>
				<Route
					exact
					path='/eyeliner'
					render={(props) => (
						<Eyeliner
							products={this.state.products}
							filteredSearch={this.state.filteredSearch}
							searchInput={this.state.searchInput}
						/>
					)}
				/>
				<Route
					exact
					path='/mascara'
					render={(props) => (
						<Mascara
							products={this.state.products}
							filteredSearch={this.state.filteredSearch}
							searchInput={this.state.searchInput}
						/>
					)}
				/>
				<Route
					exact
					path='/lipstick'
					render={(props) => (
						<Lipstick
							products={this.state.products}
							filteredSearch={this.state.filteredSearch}
							searchInput={this.state.searchInput}
						/>
					)}
				/>
				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
