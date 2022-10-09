import { useLocation } from 'react-router';

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../contexts/userContext.js';
import MediaQuery from 'react-responsive';

import SideMenu from '../../components/Menu/index.js';
import useUnit from '../../hooks/api/useUnits.js';
import { ThunderboltOutlined } from '@ant-design/icons';

import UnitContext from '../../contexts/unitContext.js';
import { InfomationArea, TitleContainer, Dashboard, Main } from '../CompanyOverview/index.js';
import CreateAssetBanner from '../../components/CreateAsset/createAssetBanner.js';

export default function CreateAssetView() {
	const location = useLocation();
	const AssetName = location.state.newAsset;
	console.log(location);

	const { unitData } = useContext(UnitContext);
	const { userData } = useContext(UserContext);

	return (
		<Main>
			<MediaQuery minWidth={1000}>
				<SideMenu entityTitle={'Assets'} entityArray={unitData.assets} />
			</MediaQuery>
			<Dashboard>

				<TitleContainer>
					<div>
						<ThunderboltOutlined style={{ color: '#fff', fontSize: 45, marginRight: 22 }} />
						<h1>{AssetName.toUpperCase()}</h1>
					</div>
					<p>{unitData.company}</p>
				</TitleContainer>
				<InfomationArea>
					<CreateAssetBanner assetName={AssetName}></CreateAssetBanner>
				</InfomationArea>
			</Dashboard>
		</Main>
	);
}

