import { getPosts } from '../api/posts/get.mjs';
import { deletePostListener } from './deletePost.mjs';
import { load } from '../storage/index.mjs';
import { searchBar } from './searchBar.mjs';

/**
 * Gathers all posts from API and creates HTML
 */

const feedContainer = document.querySelector('.feed-container');
export const renderHTML = (posts) => {
	posts.map((post) => {
		const { title, media, tags, body, id } = post;

		if (media && tags) {
			const markup = `
        <a class="w-2/3 shadow-lg cursor-pointer text-white flex flex-col" href='../post.html?id=${id}'>
          <img class="" src="${media}" alt="${title}">
          <div class="py-10 my-6">
          <div class="font-bold text-xl mb-2">${title}</div>
            <p class="text-gray-700 text-base">
            ${body}
            </p>
          </div>
          <div class="pt-4 pb-2 flex">
            ${tags
							.map((tag) => {
								return `
                  <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${tag}</span>
              `;
							})
							.join('')}
            
            <button
                id='${id}'
                class="delete-post text-primary bg-secondary rounded-lg px-5 py-2.5 text-center">
              Delete post
            </button>
          </div>
        </a>
        `;

			feedContainer.insertAdjacentHTML('afterbegin', markup);
		}
	});
};

export const viewAllPosts = async () => {
	const allPosts = await getPosts();

	if (feedContainer) {
		// sortPosts(allPosts);
		renderHTML(allPosts);
		searchBar(allPosts);
		// const userName = load('profile').name;
		deletePostListener();
	}
};
