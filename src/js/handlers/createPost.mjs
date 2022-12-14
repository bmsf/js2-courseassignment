import { createPost } from '../api/posts/create.mjs';
/**
 * Retrieves value from form when user creates a new post and transforms them into
 * an object before passing the values to the api
 * @example
 * ```js
 * // Call the listener to retrieve value from form and send to api
 * createPostFormListener()
 * ```
 */
export const createPostFormListener = () => {
	const form = document.querySelector('#createPost');

	if (form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const formValues = event.target;

			const formData = new FormData(formValues);

			const newPost = Object.fromEntries(formData.entries());

			createPost(newPost);
		});
	}
};
