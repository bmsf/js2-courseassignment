import { tokenFetch } from '../tokenFetch.mjs';
import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/posts';

/**
 * Function for retrieving array with all posts(100 posts)
 */

export const getPosts = async () => {
	const getPostURL = `${API_SOCIAL_URL}${action}`;

	const response = await tokenFetch(getPostURL);

	return await response.json();
};

/**
 * Function for sorting the posts. Exactly the same url as getPosts but provides different URL
 * through parameteres.
 * @param {string} sortType
 * @param {string} sortOrder
 * @returns New array in different order depending on what is provided
 */

export const getSortedPosts = async (sortType, sortOrder) => {
	const getPostURL = `${API_SOCIAL_URL}${action}?sort=${sortType}&sortOrder=${sortOrder}`;
	const response = await tokenFetch(getPostURL);

	return await response.json();
};

/**
 * Takes in a post id and sends it to api
 * @param {number} id
 * @returns Specific post as object
 */

export const getPost = async (id) => {
	if (!id) {
		throw new Error('Delete requires a postID');
	}
	const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author`;

	const response = await tokenFetch(getPostURL);

	return await response.json();
};
