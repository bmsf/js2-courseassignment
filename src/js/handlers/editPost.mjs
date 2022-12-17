import { editPost } from '../api/posts/edit.mjs';
import { getPost } from '../api/posts/get.mjs';
import { load } from '../storage/index.mjs';
/**
 * Retrieves value from form when user creates a new post and transforms them into
 * an object before passing the values to the api
 * @example
 * ```js
 * // Call the listener to retrieve value from form and send to api
 * createPostFormListener()
 * ```
 */
export const editPostFormListener = async () => {
	console.log(load('profile').name);

	const form = document.querySelector('#editPost');

	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const id = params.get('id');

	if (form) {
		const post = await getPost(id);

		console.log(post);

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
