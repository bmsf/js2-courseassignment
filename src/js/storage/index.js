export const storeUsers = (key, value) => {
	const formatedValue = JSON.stringify(value);
	localStorage.setItem(key, formatedValue);
};
