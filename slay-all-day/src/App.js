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
import Mascara from './components/Mascara';
import Lipstick from './components/Lipstick';
import Search from './components/Search';

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
				<Route exact path='/mascara' component={Mascara} />
				<Route exact path='/lipstick' component={Lipstick} />
			</div>
		);
	}
}

export default withRouter(App);
