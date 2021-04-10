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
