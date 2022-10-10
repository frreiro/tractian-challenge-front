import api from './api.js';

export async function getAssetData(assetId, token) {
	const response = await api.get(`/assets/${assetId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function postNewAsset(body, token) {
	const response = await api.post('/assets', body, {
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'multipart/form-data'
		},
	});

	return response.data;
}

export async function updateAsset(assetId, body, token) {
	const response = await api.put(`/assets/${assetId}`, body, {
		headers: {
			'Authorization': `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function deleteAsset(assetId, token) {
	const response = await api.delete(`/assets/${assetId}`, {
		headers: {
			'Authorization': `Bearer ${token}`,
		},
	});

	return response.data;
}
