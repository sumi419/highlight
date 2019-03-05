import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Foundation from './components/Foundation';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<NavBar />
				<Route exact path='/' component={Home} />
				<Route exact path='/foundation' component={Foundation} />
			</div>
		);
	}
}

export default withRouter(App);

// <Route exact path='/foundation' render={() => <Foundation />} />
