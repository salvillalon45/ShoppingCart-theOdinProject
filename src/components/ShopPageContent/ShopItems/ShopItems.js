// -----------------------------------------------
//
// ShopItems -> ShopItems.js
// Desc: This component will render all items in the shop
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Bootstrap
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

// Components
import Item from '../../Reusable/Item';
// -----------------------------------------------

function ShopItems(props) {
	const { data } = props;
	const [items, setItems] = React.useState({});

	function createItems(data, type) {
		return Object.values(data).map((obj, index) => {
			const itemName = obj.item_name;
			const itemPrice = obj.item_price;
			const itemDescription = obj.item_description;
			const itemImage = obj.item_image;

			return (
				<Item
					itemName={itemName}
					itemPrice={itemPrice}
					itemImage={itemImage}
					itemDescription={itemDescription}
				/>
			);
		});
	}

	function showItems() {
		console.log('Inside showItems');
		if (
			items && // 👈 null and undefined check
			Object.keys(items).length === 0 &&
			items.constructor === Object
		) {
			return null;
		}

		console.log({ items });
		return items;
	}

	React.useEffect(() => {
		console.log('Inside useEffect 1');
		console.log(data);
		const result = createItems(data);
		console.log(result);
		setItems(result);
	}, [data]);

	return <CardColumns>{showItems()}</CardColumns>;
}

export default ShopItems;
