// -----------------------------------------------
//
// TotalCost -> TotalCost.js
// Desc: TotalCost that will show how much the user will pay
// on CartPage
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Redux
import { useSelector } from 'react-redux';
// -----------------------------------------------

function TotalCost() {
	const shoppingCartState = useSelector(state => state.shoppingCart);

	function calculateTotalCost() {
		const { cartItems } = shoppingCartState;
		let total = 0;

		cartItems.map(cartItem => {
			const { total_price } = cartItem;
			total = total + total_price;
		});

		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(total);

		// return total;
	}

	return (
		<div className='totalCostContainer'>
			<p className='sec bold larger upper'>Order Summary</p>

			<p>
				Total Cost: <b>{calculateTotalCost()}</b>
			</p>
		</div>
	);
}

export default TotalCost;
