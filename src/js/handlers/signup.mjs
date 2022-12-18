import { signup } from '../api/auth/signup.mjs';
/**
 * Retrieves value from form when user creates new account
 * and sends it to the api
 * @example
 * ```js
 * // Get data from form and send it to api
 * signupFormListener()
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
