// -----------------------------------------------
//
// Pages -> index.js
// Desc: Home Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Gatsby
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';

// Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Images
import image from '../images/jb1.jpg';
// -----------------------------------------------

function ShopPage(props) {
	const { state } = props.location;

	console.table(state);

	return (
		<Layout>
			<SEO title='Home' />
			<h1>SHOP PAGE</h1>
		</Layout>
	);
}

export default ShopPage;
