import { sendNewUnit } from '../../services/units.api.js';
import useAsync from '../useAsync.js';

export default function useNewUnit() {
	const {
		data: unit,
		error: unitError,
		isLoading: unitIsLoading,
		asyncFunc: setNewUnit
	} = useAsync(sendNewUnit, false);

	return {
		unit,
		unitError,
		unitIsLoading,
		setNewUnit
	};
}
