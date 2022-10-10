import { createCompany as createCompanyAsync } from '../../services/companies.api.js';
import useAsync from '../useAsync.js';

export default function useCreateCompany() {
	const {
		data: createCompanyData,
		error: createCompanyError,
		isLoading: createCompanyIsLoading,
		asyncFunc: createCompany
	} = useAsync(createCompanyAsync, false);

	return {
		createCompanyData,
		createCompanyError,
		createCompanyIsLoading,
		createCompany
	};
}
