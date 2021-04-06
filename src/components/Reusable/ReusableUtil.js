// import Item from './Item';

// function createItems(data, type) {
// 	return data.map((obj, index) => {
// 		const itemName = obj.item_name;
// 		const itemPrice = obj.item_price;
// 		const itemDescription = obj.item_description;
// 		const itemImage = obj.item_image;

// 		return (
// 			<Item
// 				itemName={itemName}
// 				itemPrice={itemPrice}
// 				itemImage={itemImage}
// 				itemDescription={itemDescription}
// 			/>
// 		);
// 	});
// }

function createCartItem(itemPrice, quantity, props) {
	const money = Number(itemPrice.slice(1));
	const price = new Intl.NumberFormat('en-IN', {
		style: 'decimal',
		currency: 'CAD'
	}).format(money);
	const totalPrice = quantity * price;
	const item = {
		item: props.item,
		total_price: totalPrice,
		quantity: quantity
	};

	return item;
}
export { createCartItem };
