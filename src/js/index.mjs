import * as handlers from './handlers/index.mjs';
import { setupSortPosts } from './handlers/index.mjs';

const path = window.location.pathname;

handlers.loginFormListener();
handlers.signupFormListener();
handlers.viewAllPosts();
handlers.createPostFormListener();
handlers.viewPost();
handlers.setupSortPosts();

// sortPosts();

// createPost({ title: 'string', body: 'string' });
// handlers.viewPost();

// if (path === '/src/pages/login/') {
// 	loginFormListener();
// } else if (path === '/src/pages/signup/') {
// 	signupFormListener();
// }
