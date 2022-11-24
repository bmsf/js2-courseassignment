import { API_SOCIAL_URL } from '../constants.mjs';

const action = '/auth/register';
const method = 'POST';

export const signup = async (profile) => {
	const signupURL = API_SOCIAL_URL + action;

	const response = await fetch(signupURL, {
		method,
		body: JSON.stringify(profile),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const results = await response.json();

	console.log(results);
};
