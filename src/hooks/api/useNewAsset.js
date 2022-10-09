import { postNewAsset } from '../../services/asset.api.js';
import useAsync from '../useAsync.js';

export default function useNewAsset() {
	const {
		data: newAsset,
		isLoading: newAssetIsLoading,
		error: newAssetError,
		asyncFunc: createNewAsset
	} = useAsync(postNewAsset, false);

	return {
		newAsset,
		newAssetIsLoading,
		newAssetError,
		createNewAsset
	};
}
