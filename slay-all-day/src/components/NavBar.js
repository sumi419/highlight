import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
	return (
		<div className='nav-container'>
			<div className='header'>
				<div>
					<Link to='/'>
						<h1> Slay All Day ✨</h1>
					</Link>
				</div>
				{/*}	<form action=''>
					<input
						type='text'
						placeholder='Search'
						onChange={props.handleSearchInput}
						value={props.filterTarget}
						name='filterTarget'
					/>
				</form>
	*/}

				<div className='main-nav'>
					<div className='product-type'>
						<Link to='/foundation'>
							<img
								src='https://cdn1.iconfinder.com/data/icons/cosmetic-and-beauty-flat/64/cosmetic-27-512.png'
								alt='icon'
							/>
							<div>Foundation</div>
						</Link>
						<Link to='/blush'>
							<img
								src='https://cdn1.iconfinder.com/data/icons/shopping-hand-drawn-1/128/38-512.png'
								alt='icon'
							/>
							<div>Blush</div>
						</Link>
						<Link to='/bronzer'>
							<img
								src='https://cdn4.iconfinder.com/data/icons/beauty-and-cosmetics-5/64/Highlight-bronzer-cosmetic-beauty-makeup-512.png'
								alt='icon'
							/>
							<div>Bronzer</div>
						</Link>
						<Link to='/eyebrows'>
							<img
								src='https://cdn1.iconfinder.com/data/icons/eyebrow-tattoo-filled-color/300/23363544Untitled-3-512.png'
								alt='icon'
							/>
							<div>Eyebrows</div>
						</Link>
						<Link to='/eyeshadow'>
							<img
								src='https://cdn1.iconfinder.com/data/icons/cosmetic-and-beauty-filled/64/cosmetic-21-512.png'
								alt='icon'
							/>
							<div>Eyeshadow</div>
						</Link>
						<Link to='/eyeliner'>
							<img
								src='https://cdn2.iconfinder.com/data/icons/beauty-products/100/04-512.png'
								alt='icon'
							/>
							<div>Eyeliner</div>
						</Link>
						<Link to='/mascara'>
							<img
								src='https://cdn1.iconfinder.com/data/icons/cosmetics-beauty-salon-barbershop-colored/100/cosmetic-06-512.png'
								alt='icon'
							/>
							<div>Mascara</div>
						</Link>
						<Link to='/lipstick'>
							<img
								src='https://cdn3.iconfinder.com/data/icons/fashion-flat-icons-vol-2/256/55-512.png'
								alt='icon'
							/>
							<div>Lipstick</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
