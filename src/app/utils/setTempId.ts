function generateUuid(): string {
	const { v4: uuidv4 } = require('uuid');
	return uuidv4();
}

export default function setTempId() {
	let tempId = localStorage.getItem('id');

	if (!tempId) {
		// We will be using uuid for the tempId but for testing purpose, it's temporarily set as Id 1
		// tempId = generateUuid();
		tempId = '1';
		localStorage.setItem('id', tempId);
	}
}
