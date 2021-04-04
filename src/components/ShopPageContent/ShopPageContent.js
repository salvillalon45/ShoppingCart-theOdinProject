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

import { useDispatch, useSelector } from 'react-redux';
import { setTest } from '../../state/actions/shoppingCartActions';
// -----------------------------------------------

function ShopPageContent(props) {
	const { categoryShow } = props;
	const [items, setItems] = React.useState({});
	const dispatch = useDispatch();

	console.log(props);

	// const portfolioState = useSelector(state => state);
	// console.table(portfolioState);

	function determineCategory() {
		dispatch(setTest('yes'));

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

// function mapStateToProps(state) {
// 	({
// 		selectedVariation: state.productDisplay.selectedVariation
// 	});
// }

// function mapDispatchToProps(dispatch) {
// 	({
// 		setDefaultVariation: variation =>
// 			dispatch(setDefaultVariation(variation))
// 	});
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ShopPageContent);

export default ShopPageContent;
