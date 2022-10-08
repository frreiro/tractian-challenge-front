import api from './api.js';

export default async function getCompanyOverview(companyId, token) {
	const response = await api.get(`/company/${companyId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
}
