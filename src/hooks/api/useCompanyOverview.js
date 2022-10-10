import { getCompanyOverview } from '../../services/companies.api.js';
import useAsync from '../useAsync.js';

export default function useCompanyOverview() {
	const {
		data: companyData,
		error: companyError,
		isLoading: companyDataIsLoading,
		asyncFunc: getCompanyOverall,
	} = useAsync(getCompanyOverview, false);

	return {
		companyData,
		companyError,
		companyDataIsLoading,
		getCompanyOverall
	};
}
