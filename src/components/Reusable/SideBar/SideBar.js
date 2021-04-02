// -----------------------------------------------
//
// SideBar -> SideBar.js
// Desc: SideBar used on Shop Page to help user
// navigate
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Bootstrap
import Nav from 'react-bootstrap/Nav';
// -----------------------------------------------

function SideBar() {
	return (
		<Nav className='col-md-12 d-none d-md-block bg-light sidebar'>
			<div className='sidebar-sticky'></div>
			<Nav.Item>
				<Nav.Link>
					<Link to='/shop' state={{ categoryShow: 'all' }}>
						All
					</Link>
				</Nav.Link>
			</Nav.Item>

			<Nav.Item>
				<Nav.Link>
					<Link to='/shop' state={{ categoryShow: 'shoes' }}>
						Shoes
					</Link>
				</Nav.Link>
			</Nav.Item>

			<Nav.Item>
				<Nav.Link>
					<Link to='/shop' state={{ categoryShow: 'men' }}>
						Men's Clothing
					</Link>
				</Nav.Link>
			</Nav.Item>

			<Nav.Item>
				<Nav.Link>
					<Link to='/shop' state={{ categoryShow: 'women' }}>
						Women's Clothing
					</Link>
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default SideBar;
