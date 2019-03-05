import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Foundation from './components/Foundation';
import Blush from './components/Blush';
import Bronzer from './components/Bronzer';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Eyebrows from './components/Eyebrows';
import Eyeshadow from './components/Eyeshadow';
import Eyeliner from './components/Eyeliner';
class App extends Component {
	render() {
		return (
			<div className='App'>
				<NavBar />
				<Route exact path='/' component={Home} />
				<Route exact path='/foundation' component={Foundation} />
				<Route exact path='/blush' component={Blush} />
				<Route exact path='/bronzer' component={Bronzer} />
				<Route exact path='/eyebrows' component={Eyebrows} />
				<Route exact path='/eyeshadow' component={Eyeshadow} />
				<Route exact path='/eyeliner' component={Eyeliner} />
			</div>
		);
	}
}

export default withRouter(App);
