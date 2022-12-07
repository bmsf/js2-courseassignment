import { tokenFetch } from '../tokenFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';

export const getPosts = async () => {
	const getPostURL = `${API_SOCIAL_URL}${action}`;

	const response = await tokenFetch(getPostURL);

	return await response.json();
};

export const getPost = async (id) => {
	if (!id) {
		throw new Error('Delete requires a postID');
	}
	const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

	const response = await tokenFetch(getPostURL);

	return await response.json();
};
