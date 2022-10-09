import api from './api.js';

export default async function getUnitData(unitId, token) {
	const response = await api.get(`/unit/${unitId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}
