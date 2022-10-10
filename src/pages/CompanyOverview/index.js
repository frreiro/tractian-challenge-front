
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GlobalOutlined } from '@ant-design/icons';
import MediaQuery from 'react-responsive';

import SideMenu from '../../components/Menu/index.js';
import VerticalBannerUnits from '../../components/Overview/VerticalBannerUnits/index.js';
import ColumnChartUnitsBanner from '../../components/Overview/ColumnChartUnitsBanner/index.js';
import PieChartStatusBanner from '../../components/Overview/PieCharStatusBanner/index.js';
import ColumnChartHealthLevelBanner from '../../components/Overview/ColumnChartHalthLevelBanner/index.js';

import UserContext from '../../contexts/userContext.js';
import useCompanyOverview from '../../hooks/api/useCompanyOverview.js';
import { useParams } from 'react-router';
import CompanyContext from '../../contexts/companyContext.js';

export default function CompanyOverView() {
	const { companyId } = useParams();
	const { userData } = useContext(UserContext);
	const { setCompanyData: setCompanyContext } = useContext(CompanyContext);

	const { companyData: companyDataAsync, companyDataIsLoading, getCompanyOverall } = useCompanyOverview();
	const [companyData, setCompanyData] = useState(companyDataAsync);

	useEffect(() => {
		if (companyDataAsync) {
			setCompanyData(companyDataAsync);
		}
	}, [companyDataAsync]);

	useEffect(() => {
		(async () => {
			try {
				const companyData = await getCompanyOverall(companyId, userData.token);
				localStorage.setItem('company', JSON.stringify(companyData));
				setCompanyData(companyData);
				setCompanyContext(companyData);
			} catch (e) {

			}
		})();
	}, []);

	return companyDataIsLoading ? 'Carregando...' :
		(
			<Main>
				<MediaQuery minWidth={1000}>
					<SideMenu entityTitle={'UNITS'} entityArray={companyData.units} />
				</MediaQuery>
				<Dashboard>
					<TitleContainer>
						<div>
							<GlobalOutlined style={{ color: '#fff', fontSize: 35, marginRight: 22 }} />
							<h1>OVERVIEW</h1>
						</div>
						<p>{companyData.name}</p>
					</TitleContainer>
					<InfomationArea>
						<MediaQuery minWidth={760}>
							<VerticalBannerUnits units={companyData.units} />
						</MediaQuery>
						<div className='horizontalBannersContainer'>
							<ColumnChartUnitsBanner entityArray={companyData.units} />
							<PieChartStatusBanner entityArray={companyData.units} />
							<MediaQuery maxWidth={760}>
								<ColumnChartHealthLevelBanner entityArray={companyData.units} />
							</MediaQuery>
						</div>
					</InfomationArea>
				</Dashboard>
			</Main>
		);
}

export const InfomationArea = styled.div`
	padding-top: 50px;
	display: flex;

	.horizontalBannersContainer {
		max-width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 30px;

	div{
		display: flex;
		padding-bottom: 10px;
	}

	h1{
		font-weight: 700;
		font-size: 35px;
		color: white;


	}

	p{
		font-weight: 500;
		font-size: 20px;
		color: white;

	}
`;

export const Dashboard = styled.main`	
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Main = styled.div`
	display: flex;

`;
