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
	console.log({ action });
	switch (action.type) {
		case shoppingCartTypes.SAVE_CART_ITEM:
			state.cartItems.push(action.payload.cartItem);

			return {
				...state,
				cartItems: state.cartItems
			};

		case shoppingCartTypes.DELETE_CART_ITEM:
			console.log('BEFORE');
			console.log(state.cartItems);
			const newArray = state.cartItems.splice(action.payload.index, 1);
			console.log('AFTER');
			console.log(state.cartItems);
			return {
				...state,
				cartItems: state.cartItems
			};
		// case portfolioTypes.PROJECTS_ERROR:
		// 	return {
		// 		...state,
		// 		message: action.payload.message
		// 	};

		default:
			return state;
	}
};

export default shoppingCartReducer;
