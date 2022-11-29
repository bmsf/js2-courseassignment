import { signup } from '../api/auth/signup.mjs';
/**
 * Retrieves value from form when user creates new account
 * and sends it to the api
 * @example
 * ```js
 * // Get data from form and send it to api
 * const formValues = gets values that user inputs
 * const formData = uses FormData class to collect key/value pairs of values from input provided by user
 *
 * ```
 */
export const signupFormListener = () => {
	const form = document.querySelector('#signupForm');

	if (form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const formValues = event.target;
			const formData = new FormData(formValues);

			const newProfile = Object.fromEntries(formData.entries());

			signup(newProfile);
		});
	}
};
