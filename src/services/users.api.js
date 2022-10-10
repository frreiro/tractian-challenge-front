import api from './api.js';

export async function getAllUsers() {
	const response = await api.get('/users');
	return response.data;
}

export async function loginUser(userId) {
	const response = await api.get(`/users/${userId}`);
	return response.data;
}

export async function createUser(body) {
	const response = await api.post('/users', body, {
		headers: {
			'Content-Type': 'multipart/form-data'
		},
	});
	return response.data;
}
