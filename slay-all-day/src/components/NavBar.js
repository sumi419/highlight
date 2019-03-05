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
					<Link to='/bronzer'>
						<div>Bronzer</div>
					</Link>
					<Link to='/eyebrows'>
						<div>Eyebrows</div>
					</Link>
					<Link to='/eyeshadow'>
						<div>Eyeshadow</div>
					</Link>
					<Link to='/eyeliner'>
						<div>Eyeliner</div>
					</Link>
					<Link to='/mascara'>
						<div>Mascara</div>
					</Link>
					<Link to='/lipstick'>
						<div>Lipstick</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
