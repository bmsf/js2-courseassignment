// import { toggleModal } from './modal.mjs';
import { signupFormListener } from './handlers/signup.mjs';
import { loginFormListener } from './handlers/login.mjs';

import { createPostFormListener } from './handlers/createPost.mjs';

import * as post from './api/posts/index.mjs';

const path = location.pathname;

loginFormListener();
signupFormListener();
createPostFormListener();

// if (path === '/src/pages/login/') {
// 	loginFormListener();
// } else if (path === '/src/pages/signup/') {
// 	signupFormListener();
// }
