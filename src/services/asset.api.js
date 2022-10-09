import api from './api.js';

export default async function getAssetData(assetId, token) {
	const response = await api.get(`/assets/${assetId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}
