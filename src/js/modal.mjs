const modal = document.querySelector('#defaultModal');
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('.closeModal');

export const toggleModal = () => {
	console.log(closeModal);
	// modal.style.display = 'block';
	openModal.addEventListener('click', () => {
		modal.style.display = 'block';
	});

	closeModal.addEventListener('click', () => {
		modal.style.display = 'none';
	});
};
