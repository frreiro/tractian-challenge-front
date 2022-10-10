import { deleteAsset as deleteAssetAsync } from '../../services/asset.api.js';
import useAsync from '../useAsync.js';

export default function useDeleteAsset() {
	const {
		data: deleteAssetData,
		error: deleteAssetError,
		isLoading: deleteAssetIsLoading,
		asyncFunc: deleteAsset
	} = useAsync(deleteAssetAsync, false);

	return {
		deleteAssetData,
		deleteAssetError,
		deleteAssetIsLoading,
		deleteAsset
	};
}
