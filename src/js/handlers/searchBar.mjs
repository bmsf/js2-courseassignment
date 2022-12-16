import { renderHTML } from './viewAllPosts.mjs';

export const searchBar = (posts) => {
	const searchForm = document.querySelector('.search-form');
	const feedContainer = document.querySelector('.feed-container');

	searchForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const form = event.target;

		const searchTarget = form.term.value.toLowerCase();
		feedContainer.innerHTML = '';
		const filteredPost = posts.filter((post) => {
			const title = post.title.toLowerCase();
			return title.includes(searchTarget);
		});

		renderHTML(filteredPost);
	});
};
