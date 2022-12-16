import { getSortedPosts } from '../api/posts/get.mjs';
import { renderHTML } from './viewAllPosts.mjs';

export const setupSortPosts = async () => {
	const dropdown = document.querySelector('#dropdownButton');
	const dropDownMenu = document.querySelector('#dropdown');

	dropdown.addEventListener('click', () => {
		if (dropDownMenu.style.display === 'none') {
			dropDownMenu.style.display = 'block';
		} else {
			dropDownMenu.style.display = 'none';
		}
	});

	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const sortType = params.get('sort');
	const sortOrder = params.get('sortOrder');

	const sorted = await getSortedPosts(sortType, sortOrder);

	renderHTML(sorted);
};
