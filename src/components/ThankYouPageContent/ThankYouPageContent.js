// -----------------------------------------------
//
// ThankYouPageContent -> ThankYouPageContent.js
// Desc: Content that will show on Thank You Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Components
import ItemsTable from '../ItemsTable';
// -----------------------------------------------

function ThankYouPageContent() {
	return (
		<Container>
			<Row>
				<Col>
					<p>Thank You For Shopping With Us!</p>
				</Col>
			</Row>
		</Container>
	);
}

export default ThankYouPageContent;
