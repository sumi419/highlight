import React from 'react';

import Product from './Product';

export default function ProductsList({ products }) {
	return (
		<div className='products-list'>
			{products.slice(0, 10).map((product) => (
				<div key={product.id} className='products-card'>
					<Product product={product} />
				</div>
			))}
		</div>
	);
}
