import { deleteUnitData } from '../../services/units.api.js';
import useAsync from '../useAsync.js';

export default function useDeleteUnit() {
	const {
		data: deleteUnitAsync,
		error: deleteUnitError,
		isLoading: deleteUnitIsLoading,
		asyncFunc: deleteUnit
	} = useAsync(deleteUnitData, false);

	return {
		deleteUnitData,
		deleteUnitError,
		deleteUnitIsLoading,
		deleteUnit
	};
}
