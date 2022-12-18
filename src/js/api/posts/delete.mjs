import { tokenFetch } from '../tokenFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';
const method = 'delete';

/**
 * Takes a post ID and provides it to the deletePostURL and sends delete method to API
 * for it to delete post with provided ID.
 * @param {number} id
 *
 */

export const deletePost = async (id) => {
	try {
		if (!id) {
			throw new Error('Delete requires a postID');
		}
		const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`;

		const response = await tokenFetch(deletePostURL, {
			method,
		});

		return await response.json();
	} catch (err) {
		console.log(err);
	}
};
