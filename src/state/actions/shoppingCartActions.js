// -----------------------------------------------
//
// state -> index.js
// Desc: Actions for shopping cart. They help us get the data
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// Types
import * as shoppingCartTypes from '../types/shoppingCartTypes';
// -----------------------------------------------

// export const setTest = value => ({
// 	type: 'TEST',
// 	value
// });

// export const setTest = message => dispatch => {
// 	dispatch({
// 		type: 'TEST',
// 		payload: {
// 			message: message
// 		}
// 	});
// };

export const saveCartItem = item => ({
	type: shoppingCartTypes.SAVE_CART_ITEM,
	payload: {
		item
	}
});

// export const setTest = (message, storeType) => dispatch => {
// 	dispatch({
// 		type: 'TEST',
// 		payload: {
// 			message: message
// 		}
// 	});
// };

// export const setTest = (message, type) => dispatch => {
// 	dispatch({
// 		type: shoppingCartTypes.TEST,
// 		payload: {
// 			message: message
// 		}
// 		// payload: {
// 		// 	message: message,
// 		// 	data: data
// 		// }
// 	});
// };

// export const storePortfolioData = (data, storeType) => (dispatch) => {
// 	let type;
// 	let message;
// 	let objName;

// 	if (storeType === 'projects') {
// 		type = portfolioTypes.STORE_PROJECTS_DATA;
// 		message = 'Projects Data Successfuly Stored!';
// 		objName = 'projectsData';
// 	} else if (storeType === 'education') {
// 		type = portfolioTypes.STORE_EDUCATION_DATA;
// 		message = 'Education Data Successfuly Stored!';
// 		objName = 'educationData';
// 	} else if (storeType === 'work') {
// 		type = portfolioTypes.STORE_WORK_DATA;
// 		message = 'Work Data Successfuly Stored!';
// 		objName = 'workData';
// 	}

// 	dispatch({
// 		type: type,
// 		payload: {
// 			message: message,
// 			[objName]: data
// 		}
// 	});
// };
