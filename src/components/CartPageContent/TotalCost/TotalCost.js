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

// Gatsby
import { Link } from 'gatsby';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Components
import ItemsTable from '../ItemsTable';

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

		return total;
	}

	return (
		<div className='totalCostContainer'>
			<p className='sec bold larger upper'>Order Summary</p>
			<p>
				Total Cost: <b>${calculateTotalCost()}</b>
			</p>
		</div>
	);
}

export default TotalCost;
