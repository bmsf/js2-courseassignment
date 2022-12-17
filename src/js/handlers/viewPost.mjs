import { getPost } from '../api/posts/get.mjs';
import { modal } from '../modal.mjs';

/**
 * Function that creates HTML for a specific post gathered from the ID provided by
 * params
 */

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

export const viewPost = async () => {
	const postContainer = document.querySelector('.post-container');

	if (postContainer) {
		const post = await getPost(id);

		const { title, body, postID, created, media } = post;

		const markup = `
            <article class="p-6 m-10 bg-secondary rounded-lg shadow-md">
                <div class="flex justify-between items-center mb-5 text-gray-500">
                    <span class="text-sm">${created}</span>
                </div>
                <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${title}</h2>
                <p class="mb-5 font-light text-gray-500 dark:text-gray-400">${body}</p>
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                        <img class="w-1/3" src="${media}" alt="${title}" />
                    </div>
                </div>
                
            </article> 
    
    `;
		modal();
		postContainer.insertAdjacentHTML('afterbegin', markup);
	}
};
