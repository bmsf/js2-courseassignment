// import { toggleModal } from './modal.mjs';
import { signupFormListener } from './handlers/signup.mjs';
import { loginFormListener } from './handlers/login.mjs';
import * as constant from './api/constants.mjs';

const path = location.pathname;

loginFormListener();
signupFormListener();

// if (path === '/src/pages/login/') {
// 	loginFormListener();
// } else if (path === '/src/pages/signup/') {
// 	signupFormListener();
// }
