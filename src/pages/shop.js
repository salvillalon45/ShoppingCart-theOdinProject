// -----------------------------------------------
//
// Pages -> shop.js
// Desc: Shop Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ShopPageContent from '../components/ShopPageContent';
// -----------------------------------------------

function ShopPage(props) {
	const { state } = props.location;
	const id = 'shopPageContainer';

	return (
		<Layout id={id}>
			<SEO title='Home' />

			<ShopPageContent categoryShow={state.categoryShow} />
		</Layout>
	);
}

export default ShopPage;
