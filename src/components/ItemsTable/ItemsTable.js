// -----------------------------------------------
//
// ItemsTable -> ItemsTable.js
// Desc: To show all the items in the cart of the user
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Gatsby
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

// Redux
import { useDispatch, useSelector } from 'react-redux';
// -----------------------------------------------

function ItemsTable() {
	const shoppingCartState = useSelector(state => state.shoppingCart);
	console.table(shoppingCartState);

	function generateCartItems() {
		const { cartItems } = shoppingCartState;

		return cartItems.map(cartItem => {
			console.log(cartItem);
			const { itemImage, itemName, itemPrice, itemIndex } = cartItem.item;
			const { quantity, total_price } = cartItem;
			console.log(itemImage, itemName, itemPrice, itemIndex);
			return (
				<tr>
					<td>
						<Container>
							<Row>
								<Col>
									<Image src={itemImage} rounded />
								</Col>

								<Col>
									<p>{itemName}</p>
									<p>{itemPrice}</p>
									<p>{itemIndex}</p>
									<p>{quantity}</p>
									<p>{total_price}</p>
								</Col>
							</Row>
						</Container>
					</td>
				</tr>
			);
		});
	}

	return (
		<Table striped bordered hover variant='dark'>
			<tbody>{generateCartItems()}</tbody>
		</Table>
	);
}

export default ItemsTable;
