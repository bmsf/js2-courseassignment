// import { toggleModal } from './modal.mjs';
import { signupFormListener } from './handlers/signup.mjs';
import { loginFormListener } from './handlers/login.mjs';
import * as post from './api/posts/index.mjs';
import { createPostFormListener } from './handlers/createPost.mjs';
import { createHTML } from './allPostsHTML.mjs';

const path = location.pathname;

loginFormListener();
signupFormListener();
createPostFormListener();

createHTML();

// if (path === '/src/pages/login/') {
// 	loginFormListener();
// } else if (path === '/src/pages/signup/') {
// 	signupFormListener();
// }
