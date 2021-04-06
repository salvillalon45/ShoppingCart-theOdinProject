// -----------------------------------------------
//
// State -> reducer.js
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
			state.cartItems.push(action.payload.item);

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
