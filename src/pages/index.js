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

function IndexPage() {
	const id = 'indexContainer';

	return (
		<Layout id={id}>
			<SEO title='Home' />

			<Jumbotron
				style={{ backgroundImage: `url(${image})` }}
				className='jumbotronContainer'
			>
				<div className='overlay'>
					<div className='jumbotronText container'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<h1 className=''>Sal's Styles</h1>

								<p className=''>
									Styles You Need For This Changing World
								</p>
							</div>
						</div>
					</div>
				</div>
			</Jumbotron>

			<Container>
				<Row>
					<Col className='textCenter'>
						<h2>Need a fresh new look?</h2>
						<p>At Sal's style you will find what you need to</p>
						<p>get a new a look!</p>
					</Col>
				</Row>

				<Row>
					<Col className='categoryContainer'>
						<Link to='/shop' state={{ categoryShow: 'shoes' }}>
							<p>Shop Shoes</p>
						</Link>
					</Col>

					<Col className='categoryContainer'>
						<Link to='/shop' state={{ categoryShow: 'men' }}>
							<p>Shop Men's Clothing</p>
						</Link>
					</Col>

					<Col className='categoryContainer'>
						<Link to='/shop' state={{ categoryShow: 'women' }}>
							<p>Shop Women's Clothing</p>
						</Link>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
// const IndexPage = () => (

// );

// const StyledBackgroundSection = styled(BackgroundSection)`
// 	width: 100%;
// 	background-position: bottom center;
// 	background-repeat: repeat-y;
// 	background-size: cover;
// `;

// export default StyledBackgroundSection

export default IndexPage;
