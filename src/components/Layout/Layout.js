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

// Styling
// import '../styles/global.scss';
import './layout.scss';
// -----------------------------------------------

const Layout = ({ children }) => {
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
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0 1.0875rem 1.45rem`
				}}
			>
				<main>{children}</main>
				<footer
					style={{
						marginTop: `2rem`
					}}
				>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href='https://www.gatsbyjs.com'>Gatsby</a>
				</footer>
			</div>
		</>
	);
};

// Layout.propTypes = {
// 	children: PropTypes.node.isRequired
// };

export default Layout;
