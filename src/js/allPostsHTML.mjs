import { getPosts } from './api/posts/get.mjs';

/**
 * Gathers all posts from API and creates HTML
 */

const feedContainer = document.querySelector('.feed-container');
const searchBar = document.querySelector('.form-control');

searchBar.addEventListener('keyup', (e) => {
	const searchTarget = e.target.value.toLowerCase();
	const filteredPost = posts.filter((allPosts) => {
		const name = title.rendered;
		return name.toLowerCase().includes(searchTarget);
	});
});

const callPosts = () => {
  createHTML(allPosts); 
  
}

export const createHTML = async (posts) => {
	const allPosts = await getPosts();

	allPosts.map((post) => {
		const { title, media, tag, body } = post;
		feedContainer.innerHTML += `
        <a class="w-2/3 shadow-lg text-white flex flex-col href=">
            <img class="object-contain" src="${media}" alt="${title}">
            <div class="py-10 my-6">
            <div class="font-bold text-xl mb-2">${title}</div>
            <p class="text-gray-700 text-base">
            ${body}
            </p>
            </div>
            <div class="pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
      </a>
        
        `;
	});
};
