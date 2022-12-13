import { tokenFetch } from '../tokenFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';
const method = 'delete';

export const deletePost = async (id) => {
	if (!id) {
		throw new Error('Delete requires a postID');
	}
	const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`;

	const response = await tokenFetch(deletePostURL, {
		method,
	});

	return await response.json();
};
