import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Foundation from './components/Foundation';
import Blush from './components/Blush';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<NavBar />
				<Route exact path='/' component={Home} />
				<Route exact path='/foundation' component={Foundation} />
				<Route exact path='/blush' component={Blush} />
			</div>
		);
	}
}

export default withRouter(App);
