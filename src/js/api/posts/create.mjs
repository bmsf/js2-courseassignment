import { tokenFetch } from '../tokenFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';
const method = 'post';

export const createPost = async (postData) => {
	const createPostURL = API_SOCIAL_URL + action;
	const body = JSON.stringify(postData);

	const response = await tokenFetch(createPostURL, {
		method,
		body,
	});

	return await response.json();
};
