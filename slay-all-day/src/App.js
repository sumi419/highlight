import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import Foundation from './components/Foundation';
import Blush from './components/Blush';
import Bronzer from './components/Bronzer';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Eyebrows from './components/Eyebrows';
import Eyeshadow from './components/Eyeshadow';
import Eyeliner from './components/Eyeliner';
import Mascara from './components/Mascara';
import Lipstick from './components/Lipstick';
import Search from './components/Search';
import Loading from './components/Loading';

class App extends Component {
	state = {
		products: []
	};

	componentDidMount() {
		const api = 'https://makeup-api.herokuapp.com/api/v1/products.json';
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
			<div className='App'>
				<NavBar />
				{/*	{this.state.products ? (
					<Route exact path='/' component={Loading} />
				) : (
					<Route exact path='/' component={Home} />
				)}
				*/}
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/foundation'
					render={(props) => <Foundation products={this.state.products} />}
				/>
				<Route exact path='/blush' component={Blush} />
				<Route exact path='/bronzer' component={Bronzer} />
				<Route exact path='/eyebrows' component={Eyebrows} />
				<Route exact path='/eyeshadow' component={Eyeshadow} />
				<Route exact path='/eyeliner' component={Eyeliner} />
				<Route exact path='/mascara' component={Mascara} />
				<Route exact path='/lipstick' component={Lipstick} />
			</div>
		);
	}
}

export default withRouter(App);
