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

function Header() {
	return (
		<Navbar className='purpleBackground'>
			<Navbar.Brand>
				<Link className='bigHeading' to='/'>
					Sal's Styles
				</Link>
			</Navbar.Brand>

			<Navbar.Toggle />

			<Navbar.Collapse className='justify-content-end'>
				<Nav>
					<Link className='nav-link' to='/'>
						Home
					</Link>

					<Link className='nav-link' to='/about'>
						About
					</Link>

					<Link
						className='nav-link'
						to='/shop'
						state={{ categoryShow: 'all' }}
					>
						Shop
					</Link>

					<Link className='nav-link' to='/cart'>
						<ShoppingCartIcon />
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
