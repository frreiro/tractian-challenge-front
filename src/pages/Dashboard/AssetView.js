import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../contexts/userContext.js';
import MediaQuery from 'react-responsive';

import SideMenu from '../../components/Menu/index.js';
import { ThunderboltOutlined } from '@ant-design/icons';
import { InfomationArea, TitleContainer, Dashboard, Main } from '../CompanyOverview/index.js';
import useAsset from '../../hooks/api/useAsset.js';
import AssetInfoBanner from '../../components/AssetsOverview/AssetInfoBanner.js';
import AssetStatusBanner from '../../components/AssetsOverview/AssetStatusBanner.js';
import AssetHealthLevelBanner from '../../components/AssetsOverview/AssetHalthLevelBanner.js';
import UnitContext from '../../contexts/unitContext.js';

export default function AssetView() {
	const { assetId } = useParams();

	const { userData } = useContext(UserContext);
	const { unitData } = useContext(UnitContext);
	const { asset: assetAsync, assetIsLoading, getAsset } = useAsset();
	const [asset, setAsset] = useState(assetAsync);

	//console.log(asset);

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
	}, [assetId]);

	return assetIsLoading ? 'Carregando...' : (
		<Main>
			<MediaQuery minWidth={1000}>
				<SideMenu entityTitle={'Assets'} entityArray={unitData.assets} />
			</MediaQuery>
			<Dashboard>

				<TitleContainer>
					<div>
						<ThunderboltOutlined style={{ color: '#fff', fontSize: 45, marginRight: 22 }} />
						<h1>{asset.name.toUpperCase()}</h1>
					</div>
					<p>{unitData.company}</p>
				</TitleContainer>
				<InfomationArea>
					<AssetInfoBanner asset={asset} />
					<div className='horizontalBannersContainer'>
						<MediaQuery minWidth={760}>
							<AssetHealthLevelBanner porcentage={asset.health_level} />
							<AssetStatusBanner status={asset.status} />
						</MediaQuery>
					</div>
				</InfomationArea>
			</Dashboard>
		</Main>
	);
}
