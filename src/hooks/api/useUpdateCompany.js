import { updateCompanyData as update } from '../../services/companies.api.js';
import useAsync from '../useAsync.js';

export default function useUpdateCompany() {
	const {
		data: updatedCompany,
		isLoading: updatedCompanyIsLoading,
		error: updatedCompanyError,
		asyncFunc: updateCompany
	} = useAsync(update, false);

	return {
		updatedCompany,
		updatedCompanyIsLoading,
		updatedCompanyError,
		updateCompany
	};
}
