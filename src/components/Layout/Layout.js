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

const Layout = ({ children }) => {
	console.table(children);
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			{/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
			<Header />

			<main>{children}</main>

			<Footer />
		</>
	);
};

// Layout.propTypes = {
// 	children: PropTypes.node.isRequired
// };

export default Layout;
