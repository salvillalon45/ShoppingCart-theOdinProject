// -----------------------------------------------
//
// Components -> Header.js
// Desc: Header for web app
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Bootstrap
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

// Material UI
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// -----------------------------------------------

function Header(props) {
	return (
		<Navbar className='purpleBackground'>
			<Navbar.Brand className='xLarge'>
				<Link to='/'>Sal's Styles</Link>
			</Navbar.Brand>

			<Navbar.Toggle />

			<Navbar.Collapse className='justify-content-end'>
				<Nav>
					<Nav.Link>
						<Link to='/'>Home</Link>
					</Nav.Link>

					<Nav.Link>
						<Link to='/about'>About</Link>
					</Nav.Link>

					<Nav.Link>
						<Link to='/shop' state={{ categoryShow: 'all' }}>
							Shop
						</Link>
					</Nav.Link>

					<Nav.Link>
						<Link to='/cart'>
							<ShoppingCartIcon />
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
