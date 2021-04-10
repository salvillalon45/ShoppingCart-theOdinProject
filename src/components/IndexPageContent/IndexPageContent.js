// -----------------------------------------------
//
// IndexPageContent -> IndexPageContent.js
// Desc: Content that will show on Index Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Images
import image from '../../images/jb2.png';
// -----------------------------------------------

function IndexPageContent() {
	return (
		<>
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
					<Col>
						<div className='introTextContainer textCenter'>
							<h2>Need a fresh new look?</h2>
							<p>At Sal's style you will find what you need to</p>
							<p>get a new a look!</p>
						</div>
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
		</>
	);
}

export default IndexPageContent;
