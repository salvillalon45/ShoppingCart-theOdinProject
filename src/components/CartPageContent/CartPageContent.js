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
import ItemsTable from '../ItemsTable';
// -----------------------------------------------

function CartPageContent(props) {
	return (
		<Container>
			<Row>
				<Col>
					<ItemsTable />

					<Link to='/thankYou'>
						<Button variant='primary' type='submit'>
							Checkout
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}

export default CartPageContent;
