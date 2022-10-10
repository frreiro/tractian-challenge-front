import { updateUnitData as update } from '../../services/units.api.js';
import useAsync from '../useAsync.js';

export default function useUpdateUnit() {
	const {
		data: updatedUnit,
		isLoading: updatedUnitIsLoading,
		error: updatedUnitError,
		asyncFunc: updateUnit
	} = useAsync(update, false);

	return {
		updatedUnit,
		updatedUnitIsLoading,
		updatedUnitError,
		updateUnit
	};
}
