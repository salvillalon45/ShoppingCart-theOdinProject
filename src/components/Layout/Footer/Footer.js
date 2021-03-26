// -----------------------------------------------
//
// Layout -> Footer.js
// Desc: Footer for web app
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import React from 'react';

// Gatsby
import { Link } from 'gatsby';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Material UI
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import EmailIcon from '@material-ui/icons/Email';

// Images
import GatsbyIcon from '../../../images/gatsby-icon.png';
// -----------------------------------------------

function Footer() {
	return (
		<footer className='footerContainer'>
			<Container>
				<Row>
					<Col className='companyInfoContainer'>
						<h2>Company Info</h2>

						<ul>
							<Link to='/about'>
								<li>About Us</li>
							</Link>

							<Link to='/shop'>
								<li>Shop</li>
							</Link>

							<a href='https://github.com/salvillalon45/theOdinProject-ShoppingCart'>
								<li>Our GitHub Repository</li>
							</a>

							<a href='https://www.linkedin.com/in/salvadorvillalon/'>
								<li>The Developer Who Made This</li>
							</a>
						</ul>
					</Col>

					<Col className='connectWithUsContainer'>
						<h2>Connect With Us</h2>

						<Row className='connectLogos' id='row1'>
							<FacebookIcon />
							<InstagramIcon />
							<TwitterIcon />
						</Row>

						<Row className='connectLogos' id='row2'>
							<YouTubeIcon />
							<PinterestIcon />
							<EmailIcon />
						</Row>
					</Col>

					<Col className='logoContainer'>
						<Image src={GatsbyIcon} fluid />
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
