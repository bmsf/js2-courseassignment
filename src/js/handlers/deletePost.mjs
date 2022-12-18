import { deletePost } from '../api/posts/delete.mjs';

/**
 * Retrieves the ID from post when user presses delete button and sends the data to deletePost()
 * @example
 * ```js
 * // Call the listener to retrieve value from post and send to api
 * deletePostListener()
 * ```
 */
export const deletePostListener = async () => {
	const deleteBtn = document.querySelectorAll('.delete-post');

	deleteBtn.forEach((removePost) => {
		const deleteEntry = removePost;

		deleteEntry.addEventListener('click', (event) => {
			event.preventDefault();
			const data = event.target;
			const id = data.id;

			deletePost(id);
		});
	});
};
