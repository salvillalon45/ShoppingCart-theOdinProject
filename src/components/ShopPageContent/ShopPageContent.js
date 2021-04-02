// -----------------------------------------------
//
// ShopPageContent -> ShopPageContent.js
// Desc: This component will render the Shop Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import ShopItems from './ShopItems/ShopItems';
import SideBar from '../Reusable/SideBar';

// Data
import menData from '../../data/menData.json';
import womenData from '../../data/womenData.json';
import shoesData from '../../data/shoesData.json';
// -----------------------------------------------

function ShopPageContent(props) {
	const { categoryShow } = props;
	const [items, setItems] = React.useState({});

	function determineCategory() {
		if (categoryShow === 'men') {
			setItems(menData);
		} else if (categoryShow === 'women') {
			setItems(womenData);
		} else if (categoryShow === 'shoes') {
			setItems(shoesData);
		} else {
			setItems({ menData, shoesData, womenData });
		}
	}

	React.useEffect(() => {
		// console.log('Inside useEffect 0');
		determineCategory();
	}, [categoryShow]);

	// Include sidebar
	return (
		<Container>
			<Row>
				<Col>
					<SideBar />
				</Col>

				<Col>
					<ShopItems data={items} />;
				</Col>
			</Row>
		</Container>
	);
}

export default ShopPageContent;
