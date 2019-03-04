import React from 'react';
import './NavBar.css';

const NavBar = () => {
	return (
		<div className='nav-container'>
			<h1> Slay ✨</h1>
			<div className='main-nav'>
				<div>
					Face 😊
					<div>Blush</div>
					<div>Bronzer</div>
					<div>Foundation</div>
				</div>
				<div>
					Eyes 😍
					<div>Eyebrow</div>
					<div>Eyeliner</div>
					<div>Eyeshadow</div>
					<div>Mascara</div>
				</div>
				<div>
					Lips 👄
					<div>Lip Liner</div>
					<div>Lipstick 💄💋</div>
				</div>
				<div>
					Nails 💅
					<div>Nail Polish</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;

// create Nav Bar
// have brand, product type
// for individual products so price? tag, name, image, product link on image, add comment section

// only show products that have images
// only show items that have prices more than 0$
// limit amount of items shown in initial load front page
