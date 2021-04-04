// import { createStore } from 'redux';

// function reducer(state, action) {
// 	console.table(state);
// 	console.table(action);
// }

// const initialState = {
// 	test: 1
// };

// // preloadedState will be passed in by the plugin
// export default preloadedState => {
// 	return createStore(reducer, preloadedState);
// };

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from './reducers';

const initialState = {};

const createStore = () => reduxCreateStore(rootReducer, initialState);

export default createStore;

// import { createStore as reduxCreateStore } from 'redux';

// const reducer = (state, action) => {
// 	if (action.type === 'TEST') {
// 		return Object.assign({}, state, { test: 'IT WORKS' });
// 	}

// 	return state;
// };

// const initialState = {
// 	test: 'FIRST TRY'
// };

// const createStore = () => reduxCreateStore(reducer, initialState);

// export default createStore;
