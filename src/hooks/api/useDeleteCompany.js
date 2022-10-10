import { deleteCompany as deleteCompanyAsync } from '../../services/companies.api.js';
import useAsync from '../useAsync.js';

export default function useDeleteCompany() {
	const {
		data: deleteCompanyData,
		error: deleteCompanyError,
		isLoading: deleteCompanyIsLoading,
		asyncFunc: deleteCompany
	} = useAsync(deleteCompanyAsync, false);

	return {
		deleteCompanyData,
		deleteCompanyError,
		deleteCompanyIsLoading,
		deleteCompany
	};
}
