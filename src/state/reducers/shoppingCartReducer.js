// -----------------------------------------------
//
// State -> shoppingCartReducer.js
// Desc: To Help us reduce the actions
//
// -----------------------------------------------

// -----------------------------------------------
// Imports
import * as shoppingCartTypes from '../types/shoppingCartTypes';
// -----------------------------------------------

const initialState = {
	isLoading: false,
	cartItems: []
};

const shoppingCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case shoppingCartTypes.SAVE_CART_ITEM:
			state.cartItems.push(action.payload.cartItem);

			return {
				...state,
				cartItems: state.cartItems
			};

		case shoppingCartTypes.DELETE_CART_ITEM:
			state.cartItems.splice(action.payload.index, 1);

			return {
				...state,
				cartItems: state.cartItems
			};

		case shoppingCartTypes.RESET_CART:
			return {
				...state,
				cartItems: []
			};

		default:
			return state;
	}
};

export default shoppingCartReducer;
