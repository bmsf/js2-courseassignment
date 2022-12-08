import { login } from '../api/auth/login.mjs';
/**
 * Retrieves value from form when user creates new account
 * and sends it to the api
 * @example
 * ```js
 * // Get data from form and send it to api
 * loginFromListener();
 * ```
 */
export const loginFormListener = () => {
	const form = document.querySelector('#loginForm');

	if (form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const formValues = event.target;
			const formData = new FormData(formValues);

			const newProfile = Object.fromEntries(formData.entries());

			login(newProfile);
		});
	}
};
