import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/auth/register';
const method = 'post';

/**
 * Retrieves value user provided
 * @param {object} object from user input
 * ```js
 * // Send the data to api end point
 * ```
 */

export const signup = async (newProfile) => {
	const signupURL = API_SOCIAL_URL + action;
	const body = JSON.stringify(newProfile);

	try {
		const response = await fetch(signupURL, {
			headers: {
				'Content-Type': 'application/json',
			},
			method,
			body,
		});
		return await response.json();
	} catch (err) {
		alert(err);
	}
};
