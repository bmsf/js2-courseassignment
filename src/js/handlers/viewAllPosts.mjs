import { getPosts } from '../api/posts/get.mjs';
import { deletePostListener } from './deletePost.mjs';
import { load } from '../storage/index.mjs';
/**
 * Gathers all posts from API and creates HTML
 */

// const searchBar = document.querySelector('.form-control');

// searchBar.addEventListener('keyup', (e) => {
// 	const searchTarget = e.target.value.toLowerCase();
// 	const filteredPost = posts.filter((allPosts) => {
// 		const name = title.rendered;
// 		return name.toLowerCase().includes(searchTarget);
// 	});
// });

// const callPosts = () => {
//   createHTML(allPosts);

// }

export const viewAllPosts = async () => {
	const allPosts = await getPosts();

	const feedContainer = document.querySelector('.feed-container');

	const userName = load('profile').name;

	if (feedContainer) {
		allPosts.map((post) => {
			const { title, media, tag, body, id } = post;

			if (userName)
				feedContainer.innerHTML += `
        <div class="w-2/3 shadow-lg text-white flex flex-col cursor-pointer">
            <img class="" src="${media}" alt="${title}">
            <div class="py-10 my-6">
            <div class="font-bold text-xl mb-2">${title}</div>
              <p class="text-gray-700 text-base">
              ${body}
              </p>
            </div>
            <div class="pt-4 pb-2 flex">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              <button
                  id='${id}'
					        class="delete-post text-primary bg-secondary rounded-lg px-5 py-2.5 text-center">
					      Delete post
				      </button>
            </div>
      </div>
        `;
		});
	}
	deletePostListener();
};
