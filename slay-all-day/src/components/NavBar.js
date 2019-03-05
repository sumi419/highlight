import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className='nav-container'>
			<Link to='/'>
				<h1> Slay All Day ✨</h1>
			</Link>
			<div className='main-nav'>
				<div className='product-type'>
					<Link to='/foundation'>
						<div>Foundation</div>
					</Link>
					<Link to='/blush'>
						<div>Blush</div>
					</Link>
					<div>Bronzer</div>
					<div>Eyebrow</div>
					<div>Eyeshadow</div>
					<div>Eyeliner</div>
					<div>Mascara</div>
					<div>Lipstick</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
