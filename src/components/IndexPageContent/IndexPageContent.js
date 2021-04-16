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
import image from '../../images/edit_jb2.jpg';
import sq3 from '../../images/sq3.jpg';
import sq2 from '../../images/sq2.jpg';
import sq1 from '../../images/sq1.jpg';
// -----------------------------------------------

function IndexPageContent() {
	return (
		<>
			<Jumbotron
				className='jumbotronContainer'
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className='overlay '>
					<div className='jumbotronText container'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<h1 className='bigHeading'>Sal's Styles</h1>

								<p className='xLarge'>
									Styles You Need For A Changing World
								</p>
							</div>
						</div>
					</div>
				</div>
			</Jumbotron>

			<Container fluid>
				<Row>
					<Col>
						<div className='introTextContainer textCenter'>
							<p id='title'>Need a fresh new look?</p>
							<p>At Sal's style you will find what you need to</p>
							<p>get a new a look!</p>
						</div>
					</Col>
				</Row>

				<Row id='row2'>
					<Col>
						<div
							className='categoryContainer'
							id='sq1'
							style={{ backgroundImage: `url(${sq1})` }}
						>
							<Link to='/shop' state={{ categoryShow: 'shoes' }}>
								<p>Shop Shoes</p>
							</Link>
						</div>
					</Col>

					<Col>
						<div
							className='categoryContainer'
							id='sq2'
							style={{ backgroundImage: `url(${sq2})` }}
						>
							<Link to='/shop' state={{ categoryShow: 'men' }}>
								<p>Shop Men's Clothing</p>
							</Link>
						</div>
					</Col>

					<Col>
						<div
							className='categoryContainer'
							id='sq3'
							style={{ backgroundImage: `url(${sq3})` }}
						>
							<Link to='/shop' state={{ categoryShow: 'women' }}>
								<p>Shop Women's Clothing</p>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default IndexPageContent;
