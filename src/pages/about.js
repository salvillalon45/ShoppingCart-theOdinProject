// -----------------------------------------------
//
// Pages -> about.js
// Desc: About Page
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/seo';
import AboutPageContent from '../components/AboutPageContent';
// -----------------------------------------------

const AboutPage = () => (
	<Layout>
		<SEO title='Home' />
		<AboutPageContent />
	</Layout>
);

export default AboutPage;
