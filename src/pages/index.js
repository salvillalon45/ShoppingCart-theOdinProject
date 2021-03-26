// -----------------------------------------------
//
// Pages -> index.js
// Desc: Home Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Gatsby
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';

// Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
// -----------------------------------------------

function IndexPage() {
	const id = 'indexContainer';

	return (
		<Layout id={id}>
			<SEO title='Home' />

			<Jumbotron fluid className='jumbotronContainer'>
				<div className='overlay'>
					<div className='jumbotronText container'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<h1 className='text90 whiteText boldText'>
									Salvador Villalon
								</h1>
								<p className='text50 whiteText boldText'>
									Software Engineer
								</p>
								<p className='text25 whiteText'>
									I make things that make a difference.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Jumbotron>
		</Layout>
	);
}
// const IndexPage = () => (

// );

export default IndexPage;
