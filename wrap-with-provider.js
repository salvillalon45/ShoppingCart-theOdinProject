import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/state/createStore';

const wrapped = ({ element }) => (
	<Provider store={createStore()}>{element}</Provider>
);

export default wrapped;
// export default ({ element }) => (
// 	<Provider store={createStore()}>{element}</Provider>
// );
