export const openFilter = () => {
	const feedContainer = document.querySelector('.feed-container');
	const dropdown = document.querySelector('#dropdownButton');
	const dropDownMenu = document.querySelector('#dropdown');

	if (feedContainer) {
		dropdown.addEventListener('click', () => {
			if (dropDownMenu.style.display === 'none') {
				dropDownMenu.style.display = 'block';
			} else {
				dropDownMenu.style.display = 'none';
			}
		});
	}
};
