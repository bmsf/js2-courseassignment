import { editPost } from '../api/posts/edit.mjs';
import { getPost } from '../api/posts/get.mjs';
import { load } from '../storage/index.mjs';
/**
 * Retrieves data from form when user edits a post and transforms them into
 * an object before passing the values to the api through editPost(). It also pre occupies the 
 * form values so the user doesn't have to change all of the data.
 * @example
 * ```js
 * // Call the listener to retrieve value from form and send to api
 * editPostFormListener()
 * ```
 */
export const editPostFormListener = async () => {
	const form = document.querySelector('#editPost');

	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const id = params.get('id');

	if (form) {
		const post = await getPost(id);

		form.title.value = post.title;
		form.body.value = post.body;
		form.tags.value = post.tags;
		form.media.value = post.media;

		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const formValues = event.target;

			const formData = new FormData(formValues);

			const newPost = Object.fromEntries(formData.entries());

			newPost.id = id;

			editPost(newPost);
		});
	}
};
