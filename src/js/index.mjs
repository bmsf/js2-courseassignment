// import { toggleModal } from './modal.mjs';
import { signupFormListener } from './handlers/signup.mjs';
import { loginFormListener } from './handlers/login.mjs';

import { createPost } from './api/posts/create.mjs';
import { load } from './storage/index.mjs';
import { createPostFormListener } from './handlers/createPost.mjs';

const path = location.pathname;

loginFormListener();
signupFormListener();
createPostFormListener();

// if (path === '/src/pages/login/') {
// 	loginFormListener();
// } else if (path === '/src/pages/signup/') {
// 	signupFormListener();
// }

// createPost({
// 	title: 'Test title',
// 	body: 'Test body',
// });
