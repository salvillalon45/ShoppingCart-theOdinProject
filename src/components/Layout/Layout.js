// -----------------------------------------------
//
// Layout -> Layout.js
// Desc: Layout component that queries for data
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import Header from './Header';
import Footer from './Footer';

// Styling
import '../../styles/global.scss';
import './layout.scss';
// -----------------------------------------------

function Layout(props) {
	const { id, children } = props;
	const [cartItems, setCartItems] = React.useState([]);

	function handleAddToCart(newItem) {
		console.log('What is newItem:: ' + newItem);
		setCartItems(cartItems.concat(newItem));
	}
	// console.table(children);
	// console.table(props);
	// const data = useStaticQuery(graphql`
	// 	query SiteTitleQuery {
	// 		site {
	// 			siteMetadata {
	// 				title
	// 			}
	// 		}
	// 	}
	// `);

	return (
		<>
			{/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
			<Header />

			<main id={id}>{children}</main>

			<Footer />
		</>
	);
}

// Layout.propTypes = {
// 	children: PropTypes.node.isRequired
// };

export default Layout;
