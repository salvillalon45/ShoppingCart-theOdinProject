// -----------------------------------------------
//
// ShopItems -> ShopItems.js
// Desc: This component will render all items in the shop
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Bootstrap
import Card from 'react-bootstrap/Card';

// Data
import menData from '../../../data/menData.json';
import womenData from '../../../data/womenData.json';
import shoesData from '../../../data/shoesData.json';
// -----------------------------------------------

function ShopItems(props) {
	// const { categoryShow } = props;
	// const [items, setItems] = React.useState({});

	// function determineCategory() {
	// 	if (categoryShow === 'men') {
	// 		setItems(menData);
	// 	} else if (categoryShow === 'women') {
	// 		setItems(womenData)
	// 	} else if (categoryShow === 'shoes') {
	// 		setItems(shoesData);
	// 	} else (categoryShow === 'all') {
	// 		setItems({ menData, shoesData, womenData });
	// 	}
	// }

	// React.useEffect(() => {
	// 	determineCategory();
	// }, [categoryShow]);

	// function generateItems() {
	// 	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map;
	// }

	return (
		<div>
			<h1>YES</h1>
		</div>
	);
}

export default ShopItems;
