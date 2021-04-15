// -----------------------------------------------
//
// AboutPageContent -> AboutPageContent.js
// Desc: Content that will show on About Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// -----------------------------------------------

function AboutPageContent() {
	return (
		<Container>
			<Row>
				<Col>
					<div className='aboutContentContainer'>
						<h1>Sal's Styles</h1>

						<p className='larger'>
							Giving You The Styles You Need Since 1993
						</p>

						<div className='line' />

						<p>
							Sal's Styles is dedicated to delivering an exclusive
							collection of the most relevant brands and styles to
							the community.{' '}
						</p>
						<p>
							Curated in{' '}
							<a href='https://en.wikipedia.org/wiki/Calexico,_California'>
								Calexico in the Imperial Valley
							</a>
						</p>
						<p>
							<a href='https://www.linkedin.com/in/salvadorvillalon/'>
								Meet the Founder
							</a>
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default AboutPageContent;
