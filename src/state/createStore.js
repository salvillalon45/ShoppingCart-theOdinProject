import { createStore as reduxCreateStore } from 'redux';
import rootReducer from './reducers';

const initialState = {};

const createStore = () =>
	reduxCreateStore(
		rootReducer,
		initialState
		// This helps me see the redux store in the Redux Dev Tool
		// typeof window !== 'undefined' &&
		// window.__REDUX_DEVTOOLS_EXTENSION__ &&
		// 	window.__REDUX_DEVTOOLS_EXTENSION__()
	);

export default createStore;
