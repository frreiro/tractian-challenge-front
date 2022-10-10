import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../contexts/userContext.js';
import MediaQuery from 'react-responsive';

import SideMenu from '../../components/Menu/index.js';
import { ThunderboltOutlined, EditOutlined } from '@ant-design/icons';
import { InfomationArea, TitleContainer, Dashboard, Main } from '../CompanyOverview/index.js';
import useAsset from '../../hooks/api/useAsset.js';
import AssetInfoBanner from '../../components/AssetsOverview/AssetInfoBanner.js';
import AssetStatusBanner from '../../components/AssetsOverview/AssetStatusBanner.js';
import AssetHealthLevelBanner from '../../components/AssetsOverview/AssetHalthLevelBanner.js';
import UnitContext from '../../contexts/unitContext.js';
import useUpdateAsset from '../../hooks/api/useUpdateAsset.js';
import EditableText from '../../components/editableText.js';

export default function AssetView() {
	const { assetId } = useParams();

	const { userData } = useContext(UserContext);
	const { unitData } = useContext(UnitContext);

	const { asset: assetAsync, assetIsLoading, getAsset } = useAsset();
	const { updatedAssetIsLoading, updateAsset } = useUpdateAsset();

	const [asset, setAsset] = useState(assetAsync);

	useEffect(() => {
		if (assetAsync) {
			setAsset(assetAsync);
		}
	}, [assetAsync]);

	useEffect(() => {
		(async () => {
			try {
				const assetData = await getAsset(assetId, userData.token);
				setAsset(assetData);
			} catch (e) {

			}
		})();
	}, [assetId, updatedAssetIsLoading]);

	async function changeAsset(property) {
		try {
			await updateAsset(assetId, property, userData.token);
		} catch (e) {

		}
	}
	return assetIsLoading ? 'Carregando...' : (
		<Main>
			<MediaQuery minWidth={1000}>
				<SideMenu entityTitle={'Assets'} entityArray={unitData.assets} />
			</MediaQuery>
			<Dashboard>

				<TitleContainer>
					<div>
						<ThunderboltOutlined style={{ color: '#fff', fontSize: 45, marginRight: 22 }} />
						<EditableText submitFuncion={(text) => changeAsset({ name: text })}>
							<h1 >{asset.name.toUpperCase()}</h1>
						</EditableText>
					</div>
					<p>{unitData.company}</p>
				</TitleContainer>
				<InfomationArea>
					<AssetInfoBanner asset={asset} updateAsset={changeAsset} />
					<div className='horizontalBannersContainer'>
						<MediaQuery minWidth={760}>
							<AssetHealthLevelBanner porcentage={asset.health_level} updateAsset={changeAsset} />
							<AssetStatusBanner asset={asset} updateAsset={changeAsset} />
						</MediaQuery>
					</div>
				</InfomationArea>
			</Dashboard>
		</Main>
	);
}
