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
import Image from 'react-bootstrap/Image';

// Redux
import { useDispatch } from 'react-redux';
import { saveCartItem } from '../../state/actions/shoppingCartActions';

// Util
import { createCartItem } from '../../components/Reusable/ReusableUtil';
// -----------------------------------------------

function ItemDetailPageContent(props) {
	const { itemImage, itemName, itemPrice, itemDescription } = props.item;
	const [quantity, setQuantity] = React.useState(1);
	const [addedToCart, setAddedToCart] = React.useState(false);
	const dispatch = useDispatch();

	function onChange(event) {
		const newQuantity = Number(event.target.value);

		setQuantity(newQuantity);
	}

	function onSubmit(event) {
		event.preventDefault();

		setAddedToCart(true);

		const cartItem = createCartItem(itemPrice, quantity, props);
		dispatch(saveCartItem(cartItem));
	}

	return (
		<Container>
			<Row>
				<Col>
					<Image src={itemImage} rounded />
				</Col>

				<Col>
					<div className='detailsContainer'>
						<div className='details'>
							<p className='sec xxxLarge'>{itemName}</p>
							<p className='xxLarge'>{itemPrice}</p>
							<p className='xLarge bold'>{itemDescription}</p>
						</div>

						<div className='submissionContainer'>
							<Form onSubmit={onSubmit}>
								<Form.Group controlId='exampleForm.ControlSelect1'>
									<Form.Label className='xLarge'>
										Add How Many To Cart?
									</Form.Label>

									<Form.Control
										as='select'
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

								<div className='nextStepsContainer'>
									{addedToCart && (
										<p className='xLarge bold'>
											Item Has Been Added to Cart
										</p>
									)}

									{addedToCart && (
										<Link to='/cart'>
											<Button
												variant='primary'
												type='submit'
											>
												Go to Cart and Complete Order
											</Button>
										</Link>
									)}
								</div>
							</Form>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ItemDetailPageContent;
