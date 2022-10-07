import api from './api.js';

export async function getAllUsers() {
	const response = await api.get('/users');
	return response.data;
}

export async function loginUser(userId) {
	const response = await api.get(`/users/${userId}`);
	return response.data;
}
