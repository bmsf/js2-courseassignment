import { getPosts } from './api/posts/get.mjs';

const feedContainer = document.querySelector('.feed-container');

export const createHTML = async () => {
	const allPosts = await getPosts();

	allPosts.map((post) => {
		const { title, body, tag, media } = post;
		feedContainer.innerHTML += `
        <div class="w-2/3 shadow-lg text-white flex flex-col">
            <img class="object-contain" src="${media}" alt="Sunset in the mountains">
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
      </div>
        
        `;
	});
};
