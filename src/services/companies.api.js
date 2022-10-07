import api from './api.js';

export default async function getCompanyOverview(companyId) {
	const response = await api.get(`/company/${companyId}`);
	return response.data;
}
