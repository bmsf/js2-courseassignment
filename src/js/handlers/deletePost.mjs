import { deletePost } from '../api/posts/delete.mjs';

/**
 
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
			// location.reload();
		});
	});
};
