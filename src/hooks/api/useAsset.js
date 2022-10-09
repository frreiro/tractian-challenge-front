import getAssetData from '../../services/asset.api.js';
import useAsync from '../useAsync.js';

export default function useAsset() {
	const {
		data: asset,
		isLoading: assetIsLoading,
		error: assetError,
		asyncFunc: getAsset
	} = useAsync(getAssetData, false);

	return {
		asset,
		assetIsLoading,
		assetError,
		getAsset
	};
}
