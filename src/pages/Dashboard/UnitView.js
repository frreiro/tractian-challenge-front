import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../../contexts/userContext.js';
import MediaQuery from 'react-responsive';
import { GlobalOutlined, DeleteOutlined } from '@ant-design/icons';

import SideMenu from '../../components/Menu/index.js';

import { InfomationArea, TitleContainer, Dashboard, Main } from '../CompanyOverview/index.js';
import useUnit from '../../hooks/api/useUnits.js';
import PieChartAssetsBanner from '../../components/UnitOverview/PieChartAssetsBanner/index.js';
import ColumnChartAssetsBanner from '../../components/UnitOverview/ColumnChartAssetsBanner/index.js';
import VerticalBannerAssets from '../../components/UnitOverview/VerticalBannerAssets/index.js';
import UnitContext from '../../contexts/unitContext.js';
import useDeleteUnit from '../../hooks/api/useDeleteUnit.js';
import CompanyContext from '../../contexts/companyContext.js';

export default function UnitView() {
	const { unitId } = useParams();

	const { setUnitData } = useContext(UnitContext);
	const { companyData } = useContext(CompanyContext);
	const { userData } = useContext(UserContext);
	const { unit: unitAsync, unitError, unitIsLoading, getUnitInfo } = useUnit();
	const { deleteUnit } = useDeleteUnit();

	const navigate = useNavigate();

	const [unit, setUnit] = useState(unitAsync);

	useEffect(() => {
		if (unitAsync) {
			setUnit(unitAsync);
		}
	}, [unitAsync]);

	useEffect(() => {
		(async () => {
			try {
				const unitData = await getUnitInfo(unitId, userData.token);
				localStorage.setItem('unit', JSON.stringify(unitData));
				setUnit(unitData);
				setUnitData(unitData);
			} catch (e) {

			}
		})();
	}, []);

	async function callDeleteUnit(assetId) {
		try {
			await deleteUnit(assetId, userData.token);
			navigate(`/company/${companyData._id}`);
		} catch (e) {

		}
	}

	return unitIsLoading ? 'Carregando...' : (
		<Main>
			<MediaQuery minWidth={1000}>
				<SideMenu entityTitle={'Assets'} entityArray={unit.assets} />
			</MediaQuery>
			<Dashboard>
				<TitleContainer>
					<div>
						<GlobalOutlined style={{ color: '#fff', fontSize: 35, marginRight: 22 }} />
						<h1>{unit.name.toUpperCase()}</h1>
					</div>
					<p>{unit.company}</p>
				</TitleContainer>
				<InfomationArea>
					<MediaQuery minWidth={760}>
						<VerticalBannerAssets unit={unit} />
					</MediaQuery>
					<div className='horizontalBannersContainer'>
						<ColumnChartAssetsBanner unit={unit} />
						<PieChartAssetsBanner unit={unit} />
						<MediaQuery maxWidth={760}>
							<VerticalBannerAssets unit={unit} />
						</MediaQuery>
					</div>
				</InfomationArea>
				<DeleteOutlined className='trashicon' onClick={() => callDeleteUnit(unit._id)} style={{ cursor: 'pointer', fontSize: 20, marginRight: 22, position: 'absolute', top: 35, right: 20 }} />
			</Dashboard>
		</Main>
	);
}
