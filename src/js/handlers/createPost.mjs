import { createPost } from '../api/posts/create.mjs';
/**
 * Retrieves value from form when user creates new account
 * and sends it to the api
 * @example
 * ```js
 * // Get data from form and send it to api
 * const formValues = gets values that user inputs
 * const formData = uses FormData class to collect key/value pairs of values from input provided by user
 *
 * ```
 */
export const createPostFormListener = () => {
	const form = document.querySelector('#createPost');

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const formValues = event.target;

		const formData = new FormData(formValues);
		console.log(formData);

		const newPost = Object.fromEntries(formData.entries());

		console.log(newPost);
		// createPost(newPost);
	});
};
