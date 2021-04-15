// -----------------------------------------------
//
// Pages -> thankYou.js
// Desc: Thank You Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
import ThankYouPageContent from '../components/ThankYouPageContent';
// -----------------------------------------------

function ThankYouPage() {
	const id = 'thankYouPageContainer';

	return (
		<Layout id={id}>
			<SEO title='Home' />

			<ThankYouPageContent />
		</Layout>
	);
}

export default ThankYouPage;
