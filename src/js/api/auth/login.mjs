import { API_SOCIAL_URL } from '../constants.mjs';
import * as storage from '../../storage/index.mjs';

const action = '/auth/login';
const method = 'post';

/**
 * Retrieves value user provided
 * @param {object} object from user input
 * ```js
 * // Send the data to api end point
 * ```
 */

export const login = async (newProfile) => {
	const loginURL = API_SOCIAL_URL + action;
	const body = JSON.stringify(newProfile);

	const response = await fetch(loginURL, {
		headers: {
			'Content-Type': 'application/json',
		},
		method,
		body,
	});

	const { accessToken, ...user } = await response.json();

	storage.save('token', accessToken);

	storage.save('profile', user);
};
