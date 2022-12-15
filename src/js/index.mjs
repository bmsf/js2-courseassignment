import * as handlers from './handlers/index.mjs';
import { createPost } from './api/posts/create.mjs';
import { searchBar } from './handlers/searchBar.mjs';

const path = location.pathname;

handlers.loginFormListener();
handlers.signupFormListener();
handlers.viewAllPosts();
handlers.createPostFormListener();
handlers.viewPost();

searchBar();

// createPost({ title: 'string', body: 'string' });
// handlers.viewPost();

// if (path === '/src/pages/login/') {
// 	loginFormListener();
// } else if (path === '/src/pages/signup/') {
// 	signupFormListener();
// }
