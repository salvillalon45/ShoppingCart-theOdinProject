// -----------------------------------------------
//
// Pages -> itemDetail.js
// Desc: Item Detail Page to learn more about item
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
// -----------------------------------------------

function ItemDetailPage(props) {
	console.table(props);
	const id = 'itemDetailContainer';
	const item = props.location.state.itemObj;
	const { itemImage, itemName, itemPrice, itemIndex } = item;

	return (
		<Layout id={id}>
			<SEO title='Home' />
			<h1>ItemDetailPage PAGE</h1>
			<img src={itemImage} />
			<p>{itemName}</p>
			<p>{itemPrice}</p>
			<p>{itemIndex}</p>
			<p>Add To Cart</p>
			{/* // Include select up to 14 for them to pick */}
		</Layout>
	);
}

export default ItemDetailPage;
