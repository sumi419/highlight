import React from 'react';
import Product from './Product';

function ProductsList(props) {
	// let item;
	// //	let product = props.products.map((product) => {
	// for (let i = 0; i < props.products.length; i++) {
	// 	if (i < 10) {
	// 		item.push(
	// 			<div key={props.products.id[i]} className='products-card'>
	// 				<Product product={props.products[i]} />
	// 			</div>
	// 		);
	// 	}
	// }
	// });
	return (
		<div className='products-list'>
			{props.products.slice(0, 10).map((product) => (
				// <div key={product.id} className='products-card'>
				// <h1>{product.name}</h1>
				//     <div>
				//         <p>{product.brand} unit</p>
				//         <p>{product.product_link}</p>
				//         <img src={product.image_link} alt="product-img"/>
				//     </div>
				// </div>
				<div key={product.id} className='products-card'>
					<Product product={product} />
				</div>
			))}
		</div>
	);
	// return <div className='products-list'>{item}</div>;
}

export default ProductsList;
