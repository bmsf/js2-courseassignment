import { API_SOCIAL_URL } from '../constants.mjs';
import * as storage from '../../storage/index.mjs';

const action = '/auth/login';
const method = 'post';

/**
 * Function that sends object to API about a registered user that wants to login
 * Takes the provided data and saves it to localstorage for user to authorize and
 * stay as logged in user
 * @param {object} // values from user
 */

export const login = async (newProfile) => {
	const loginURL = API_SOCIAL_URL + action;
	const body = JSON.stringify(newProfile);

	try {
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
	} catch (error) {
		console.log(error);
	}
};	
