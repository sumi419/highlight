import React from 'react';
import './NavBar.css';

const NavBar = () => {
	return (
		<div className='nav-container'>
			<h1> Slay All Day ✨</h1>
			<div className='main-nav'>
				<div className='product-type'>
					<div>Foundation</div>
					<div>Blush</div>
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
