import { getUnitData } from '../../services/units.api.js';
import useAsync from '../useAsync.js';

export default function useUnit() {
	const {
		data: unit,
		error: unitError,
		isLoading: unitIsLoading,
		asyncFunc: getUnitInfo
	} = useAsync(getUnitData, false);

	return {
		unit,
		unitError,
		unitIsLoading,
		getUnitInfo
	};
}
