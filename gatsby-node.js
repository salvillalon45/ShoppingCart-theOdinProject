/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');

exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions;

	// page.matchPath is a special key that's used for matching pages
	// only on the client
	console.log('Page -- ', page.path);

	if (page.path.match(/^\/itemDetail/)) {
		// Update the page
		createPage({
			path: '/itemDetail',
			matchPath: '/itemDetail/*',
			component: path.resolve('src/pages/itemDetail.js')
		});
	}
};
