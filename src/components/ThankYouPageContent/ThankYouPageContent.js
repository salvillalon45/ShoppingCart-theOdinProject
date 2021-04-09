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

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Redux
import { resetCart } from '../../state/actions/shoppingCartActions';
import { useDispatch } from 'react-redux';
// -----------------------------------------------

function ThankYouPageContent() {
	const dispatch = useDispatch();

	function reset() {
		dispatch(resetCart());
	}

	React.useEffect(() => {
		reset();
	}, []);

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
