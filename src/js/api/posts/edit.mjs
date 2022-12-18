import { tokenFetch } from '../tokenFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';
const method = 'put';

/**
 * Sends data to the API about editing a provided post which must contain postID for API
 * to find specific post and edit it.
 * @param {object} postData
 * @returns
 */

export const editPost = async (postData) => {
	if (!postData.id) {
		throw new Error('Edit must contain postID');
	}

	const editPostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

	const body = JSON.stringify(postData);

	const response = await tokenFetch(editPostURL, {
		method,
		body,
	});

	return await response.json();
};
