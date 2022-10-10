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

export async function deleteCompany(companyId, token) {
	const response = await api.delete(`/company/${companyId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

export async function createCompany(body, token) {
	const response = await api.post('/company', body, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}

