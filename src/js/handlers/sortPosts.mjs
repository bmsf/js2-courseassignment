import { getSortedPosts } from '../api/posts/get.mjs';
import { openFilter } from '../openFilter.mjs';
import { renderHTML } from './viewAllPosts.mjs';

/**
 * Tracks what input is provided by the user in the sort form through params.
 * Takes the two provided params sortType and sortOrder and provides them to the
 * function getSortedPosts which sends them to api and recieves the array sorted
 * in what manner you want. It then sends it to the function renderHTML() which
 * renders the HTML over again.
 */

export const setupSortPosts = async () => {
	openFilter();
	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const sortType = params.get('sort');
	const sortOrder = params.get('sortOrder');

	const sorted = await getSortedPosts(sortType, sortOrder);

	renderHTML(sorted);
};
