import { getAllCompanies } from '../../services/companies.api.js';
import useAsync from '../useAsync.js';

export default function useCompanies() {
	const {
		data: companiesData,
		error: companiesError,
		isLoading: companiesIsLoading,
		asyncFunc: getCompanies,
	} = useAsync(getAllCompanies, false);

	return {
		companiesData,
		companiesError,
		companiesIsLoading,
		getCompanies
	};
}
