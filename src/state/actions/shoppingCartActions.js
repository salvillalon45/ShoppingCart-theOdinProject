// -----------------------------------------------
//
// actions -> shoppingCartActions.js
// Desc: Actions for shopping cart. They help us get the data
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// Types
import * as shoppingCartTypes from '../types/shoppingCartTypes';
// -----------------------------------------------

export const saveCartItem = cartItem => ({
	type: shoppingCartTypes.SAVE_CART_ITEM,
	payload: {
		cartItem
	}
});

export const deleteCartItem = index => ({
	type: shoppingCartTypes.DELETE_CART_ITEM,
	payload: {
		index
	}
});

export const resetCart = () => ({
	type: shoppingCartTypes.RESET_CART
});
