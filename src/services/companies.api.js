import api from './api.js';

export async function getCompanyOverview(companyId, token) {
	const response = await api.get(`/company/${companyId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function getAllCompanies() {
	const response = await api.get('/company');

	return response.data;
}
