// -----------------------------------------------
//
// Reusable -> Item.js
// Desc: Item component to represent all the items
// in the shop
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Bootstrap
import Card from 'react-bootstrap/Card';
// -----------------------------------------------

function Item(props) {
	const { itemImage, itemName, itemPrice } = props;

	return (
		<Card>
			<Card.Img variant='top' src={itemImage} />

			<Card.Body>
				<Card.Title>{itemName}</Card.Title>
				<Card.Text>{itemPrice}</Card.Text>
			</Card.Body>

			{/* <Card.Footer>
				<small className='text-muted'>Last updated 3 mins ago</small>
			</Card.Footer> */}
		</Card>
	);
}

export default Item;
