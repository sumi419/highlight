import React from 'react';
import Product from './Product';

function ProductsList(props) {
	return (
		<div className='products-list'>
			{props.products.map((product) => (
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
}

export default ProductsList;
