import { useLocation } from 'react-router';

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../contexts/userContext.js';
import MediaQuery from 'react-responsive';

import SideMenu from '../../components/Menu/index.js';
import useUnit from '../../hooks/api/useUnits.js';
import { MenuFoldOutlined, ThunderboltOutlined } from '@ant-design/icons';

import UnitContext from '../../contexts/unitContext.js';
import { InfomationArea, TitleContainer, Dashboard, Main } from '../CompanyOverview/index.js';
import CreateAssetBanner from '../../components/CreateAsset/createAssetBanner.js';

export default function CreateAssetView() {
	const location = useLocation();
	const AssetName = location.state.newAsset;

	const { unitData } = useContext(UnitContext);
	const { userData } = useContext(UserContext);

	const [showMenu, setShowMenu] = useState(false);

	return (
		<Main>
			<MediaQuery minWidth={1000}>
				<SideMenu entityTitle={'Assets'} entityArray={unitData.assets} />
			</MediaQuery>
			<MediaQuery maxWidth={1000}>
				{showMenu
					?
					<SideMenu entityTitle={'Assets'} entityArray={unitData.assets} closeMenu={setShowMenu} />

					:
					<MenuFoldOutlined className="menu_icon" onClick={() => setShowMenu(true)} />
				}
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

