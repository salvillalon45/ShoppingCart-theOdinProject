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
	message: ''
};

const shoppingCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case shoppingCartTypes.TEST:
			return {
				...state,
				message: action.payload.message
			};

		// case portfolioTypes.STORE_EDUCATION_DATA:
		// 	return {
		// 		...state,
		// 		message: action.payload.message,
		// 		educationData: action.payload.educationData
		// 	};

		// case portfolioTypes.STORE_WORK_DATA:
		// 	return {
		// 		...state,
		// 		message: action.payload.message,
		// 		workData: action.payload.workData
		// 	};

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
