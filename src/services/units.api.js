import api from './api.js';

export async function getUnitData(unitId, token) {
	const response = await api.get(`/unit/${unitId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function sendNewUnit(body, token) {
	const response = await api.post('/unit/', body, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function deleteUnitData(unitId, token) {
	const response = await api.delete(`/unit/${unitId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function updateUnitData(unitId, body, token) {
	const response = await api.put(`/unit/${unitId}`, body, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}
