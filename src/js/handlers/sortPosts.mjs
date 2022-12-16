/**
 * Function for sorting products
 * @param {array} posts
 */
const dropdown = document.querySelector('#dropdownRadioButton');
const dropDownMenu = document.querySelector('#dropdownDefaultRadio');

dropdown.addEventListener('click', () => {
	console.log(dropDownMenu);
});

export const sortPosts = (posts) => {
	// const sorted = posts.sort((a, b) => {
	// 	if (a.title < b.title) return -1;
	// 	return 1;
	// });

	console.log(posts);
};
