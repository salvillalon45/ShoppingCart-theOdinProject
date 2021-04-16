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

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem } from '../../../state/actions/shoppingCartActions';
// -----------------------------------------------

function ItemsTable() {
	const shoppingCartState = useSelector(state => state.shoppingCart);
	const dispatch = useDispatch();

	function removeCartItem(index) {
		dispatch(deleteCartItem(index));
	}

	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary
		}
	}));

	const classes = useStyles();

	function generateCartItems() {
		const { cartItems } = shoppingCartState;

		return cartItems.map((cartItem, index) => {
			const { itemImage, itemName, itemPrice } = cartItem.item;
			const { quantity, total_price } = cartItem;

			return (
				<div className='cartItemContainer'>
					<div className='cartImage'>
						<Image src={itemImage} rounded />
					</div>

					<div className='cartData'>
						<div className='rowInfo'>
							<p className='bold'>{itemName}</p>

							<p>Quantity: {quantity}</p>

							<Button
								onClick={() => removeCartItem(index)}
								variant='danger'
							>
								Remove Item
							</Button>
							{/* <p></p> */}
						</div>

						<div className='rowInfo'>
							<p>Price: {itemPrice}</p>

							<p id='total'>
								Total: <b>${total_price}</b>
							</p>
						</div>

						<div className='cartActions' id='removeRow'></div>
					</div>
				</div>
				// <tr>
				// 	<td>
				// 		<Image src={itemImage} rounded />
				// 	</td>
				// 	<td>{itemName}</td>
				// 	<td>{quantity}</td>
				// 	<td>{itemPrice}</td>
				// 	<td>${total_price}</td>
				// 	<td onClick={() => removeCartItem(index)}>Remove</td>
				// </tr>
				// {/* <> */}
				// 	{/* <Grid item xs={3}>
				// 		<Paper className={classes.paper}>
				// 			<Image src={itemImage} rounded />
				// 		</Paper>
				// 	</Grid>
				// 	<Grid item xs={3}>
				// 		<Paper className={classes.paper}>{itemName}</Paper>
				// 	</Grid>
				// 	<Grid item xs={3}>
				// 		<Paper className={classes.paper}>{quantity}</Paper>
				// 	</Grid>
				// 	<Grid item xs={3}>
				// 		<Paper className={classes.paper}>{itemPrice}</Paper>
				// 	</Grid>
				// 	<Grid item xs={3}>
				// 		<Paper className={classes.paper}>
				// 			{'$' + total_price}
				// 		</Paper>
				// 	</Grid>
				// 	<Grid item xs={3}>
				// 		<Paper
				// 			onClick={() => removeCartItem(index)}
				// 			className={classes.paper}
				// 		>
				// 			Remove
				// 		</Paper>
				// 	</Grid> */}
				// 	{/* </Grid> */}
				// // </>
			);
		});
	}

	return (
		<div className='cartTable'>{generateCartItems()}</div>
		// <Table>
		// 	<thead>
		// 		<tr>
		// 			<th>Image</th>
		// 			<th>Product Details</th>
		// 			<th>Quantity</th>
		// 			<th>Price</th>
		// 			<th>Total</th>
		// 			<th></th>
		// 		</tr>
		// 	</thead>
		// 	<tbody>{generateCartItems()}</tbody>
		// </Table>
		// <div className={classes.root}>
		// 	<Grid container spacing={3}>
		// 		{generateCartItems()}
		// 	</Grid>
		// </div>
	);
}

export default ItemsTable;
