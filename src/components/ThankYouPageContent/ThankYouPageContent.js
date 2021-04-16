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

// Components
import Line from '../Reusable/Line';

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
					<p className='bigHeading '>
						Thank You For Shopping With Us!
					</p>

					<Line />

					<p className='larger'>We appreciate your business</p>
				</Col>
			</Row>
		</Container>
	);
}

export default ThankYouPageContent;
