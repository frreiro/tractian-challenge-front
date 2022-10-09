import { updateAsset as update } from '../../services/asset.api.js';
import useAsync from '../useAsync.js';

export default function useUpdateAsset() {
	const {
		data: updatedAsset,
		isLoading: updatedAssetIsLoading,
		error: updatedAssetError,
		asyncFunc: updateAsset
	} = useAsync(update, false);

	return {
		updatedAsset,
		updatedAssetIsLoading,
		updatedAssetError,
		updateAsset
	};
}
