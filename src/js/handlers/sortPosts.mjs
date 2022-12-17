import { getSortedPosts } from '../api/posts/get.mjs';
import { openFilter } from '../openFilter.mjs';
import { renderHTML } from './viewAllPosts.mjs';

export const setupSortPosts = async () => {
	openFilter();
	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const sortType = params.get('sort');
	const sortOrder = params.get('sortOrder');

	const sorted = await getSortedPosts(sortType, sortOrder);

	renderHTML(sorted);
};
