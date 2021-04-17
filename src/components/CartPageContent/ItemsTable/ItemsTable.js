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

// Bootstrap
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

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
						</div>

						<div className='rowInfo'>
							<p>Price: {itemPrice}</p>

							<p id='total'>
								Total: <b>${total_price}</b>
							</p>
						</div>
					</div>
				</div>
			);
		});
	}

	return <div className='cartTable'>{generateCartItems()}</div>;
}

export default ItemsTable;
