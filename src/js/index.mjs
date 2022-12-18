import * as handlers from './handlers/index.mjs';

const path = window.location.pathname;

handlers.viewPost();
handlers.editPostFormListener();

if (path === '/pages/post-sorted.html') {
	handlers.setupSortPosts();
} else if (path === '/pages/home' || '/pages/home/index.html') {
	handlers.viewAllPosts();
	handlers.createPostFormListener();
} else if (path === '/pages/login/index.html' || '/pages/login/') {
	handlers.loginFormListener();
} else if (path === '/pages/signup/index.html' || '/pages/signup/') {
	handlers.signupFormListener();
}
