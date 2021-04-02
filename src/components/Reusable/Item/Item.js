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

// Gatsby
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

// Bootstrap
import Card from 'react-bootstrap/Card';
// -----------------------------------------------

function Item(props) {
	const { itemImage, itemName, itemPrice, itemIndex } = props;

	return (
		<Link to={'/itemDetail/' + itemIndex} state={{ itemObj: props }}>
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
		</Link>
	);
}

export default Item;
