// -----------------------------------------------
//
// Pages -> cart.js
// Desc: Cart Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
import CartPageContent from '../components/CartPageContent';
// -----------------------------------------------

const CartPage = () => (
	<Layout>
		<SEO title='Home' />
		<CartPageContent />
	</Layout>
);

export default CartPage;
