// -----------------------------------------------
//
// ItemDetailPageContent -> ItemDetailPageContent.js
// Desc: Content that will show on ItemDetailPage
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
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { saveCartItem } from '../../state/actions/shoppingCartActions';

// Util
import { createCartItem } from '../../components/Reusable/ReusableUtil';
// -----------------------------------------------

function ItemDetailPageContent(props) {
	const { itemImage, itemName, itemPrice, itemIndex } = props.item;
	const [quantity, setQuantity] = React.useState(1);
	const [addedToCart, setAddedToCart] = React.useState(false);
	const shoppingCartState = useSelector(state => state.shoppingCart);
	const dispatch = useDispatch();

	function onChange(event) {
		const newQuantity = Number(event.target.value);

		setQuantity(newQuantity);
	}

	function onSubmit(event) {
		event.preventDefault();

		setAddedToCart(true);

		const item = createCartItem(itemPrice, quantity, props);
		dispatch(saveCartItem(item));
	}

	return (
		<Container>
			<Row>
				<Col>
					<h1>ItemDetailPage PAGE</h1>
					<img src={itemImage} />
					<p>{itemName}</p>
					<p>{itemPrice}</p>
					<p>{itemIndex}</p>

					<Form onSubmit={onSubmit}>
						<Form.Group controlId='exampleForm.ControlSelect1'>
							<Form.Label>Add How Many To Cart?</Form.Label>
							<Form.Control
								as='select'
								// value={quantity}
								onChange={onChange}
							>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Form.Control>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Add To Cart
						</Button>

						{addedToCart && <p>Item Has Been Added to Cart</p>}

						{addedToCart && (
							<Link to='/cart'>
								<Button variant='primary' type='submit'>
									Go to Cart and Complete Order
								</Button>
							</Link>
						)}
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default ItemDetailPageContent;
