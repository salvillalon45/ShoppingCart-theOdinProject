// -----------------------------------------------
//
// CartPageContent -> CartPageContent.js
// Desc: Content that will show on CartPage
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
import ItemsTable from './ItemsTable';
import TotalCost from './TotalCost';

// Redux
import { useSelector } from 'react-redux';
// -----------------------------------------------

function CartPageContent() {
	const shoppingCartState = useSelector(state => state.shoppingCart);

	function checkCart() {
		if (shoppingCartState.cartItems.length === 0) {
			return true;
		}

		return false;
	}

	return (
		<Container>
			<Row>
				<Col>
					<ItemsTable />

					<Link to='/thankYou'>
						<Button
							variant='primary'
							type='submit'
							disabled={checkCart()}
						>
							Checkout
						</Button>
					</Link>
				</Col>

				<Col>
					<TotalCost />
				</Col>
			</Row>
		</Container>
	);
}

export default CartPageContent;
