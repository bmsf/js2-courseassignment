import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/auth/login';
const method = 'POST';

/**
 * Retrieves value user provided
 * @param {object} object from user input
 * ```js
 * // Send the data to api end point
 * ```
 */

export const login = async (profile) => {
	const loginURL = API_SOCIAL_URL + action;

	const response = await fetch(loginURL, {
		method,
		body: JSON.stringify(profile),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const results = await response.json();
};
