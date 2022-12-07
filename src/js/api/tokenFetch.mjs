import { load } from '../storage/index.mjs';

export const headers = () => {
	const token = load('token');

	return {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	};
};

headers();

export const tokenFetch = async (url, options) => {
	return fetch(url, {
		...options,
		headers: headers(),
	});
};
