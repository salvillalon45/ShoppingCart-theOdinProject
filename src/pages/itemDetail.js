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
import ItemDetailPageContent from '../components/ItemDetailPageContent';
// -----------------------------------------------

function ItemDetailPage(props) {
	console.table(props);
	const id = 'itemDetailPageContainer';
	const item = props.location.state.itemObj;

	return (
		<Layout id={id}>
			<SEO title='The Odin Project: Shopping Cart' />

			<ItemDetailPageContent item={item} />
		</Layout>
	);
}

export default ItemDetailPage;
