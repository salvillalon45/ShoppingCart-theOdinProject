import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/state/createStore';

const { store } = createStore();
console.table(store);

export default ({ element }) => (
	<Provider store={createStore()}>{element}</Provider>
);
