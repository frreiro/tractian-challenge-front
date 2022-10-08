
import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalOutlined } from '@ant-design/icons';

import SideMenu from '../../components/Overview/Menu/index.js';
import VerticalBanner from '../../components/VerticalBanner/index.js';
import CompanyContext from '../../contexts/companyContext.js';
import ColumnChartBanner from '../../components/Overview/ColumnChartBanner/index.js';
import PieChartBanner from '../../components/Overview/PieCharBanner/index.js';

const companyData = {
	'_id': '63406b5e661dc129a26bba75',
	'name': 'Industria Freios Supremos',
	'units': [
		{
			'_id': '633db3ba8c474ee71c5abe96',
			'name': 'Discos',
			'assets': [
				{
					'_id': '633db3c18c474ee71c5abe97',
					'name': 'Disco de freio',
					'image': 'https://img.lojadomecanico.com.br/IMAGENS/21/628/150443/1601499779170.JPG',
					'description': 'Fresadora Mini',
					'model': 'STARK',
					'owner': 'Loja do mecânico',
					'status': 'Running',
					'health_level': 40,
					'company_unit_id': '633db3ba8c474ee71c5abe96'
				},
				{
					'_id': '633f0c5892d67b92664e6913',
					'name': 'Disco',
					'description': 'Patilha de freio',
					'model': 'STARK',
					'owner': 'Tony Stark',
					'status': 'Running',
					'health_level': '100',
					'company_unit_id': '633db3ba8c474ee71c5abe96',
					'image': 'https://hfjwilebkbsilqopcgdy.supabase.co/storage/v1/object/public/tractian-images/tractian-uploads/d4cb3339-771d-4f0c-a0bf-de476e58d9de.jpg'
				}
			]
		},
		{
			'_id': '63406be9c5331330f16d29a2',
			'name': 'Freios',
			'assets': [
				{
					'_id': '633f0b1de2ff4fabbc718f0c',
					'name': 'Pastilha',
					'description': 'Patilha de freio',
					'model': 'STARK',
					'owner': 'Tony Stark',
					'status': 'Running',
					'health_level': '100',
					'company_unit_id': '63406be9c5331330f16d29a2',
					'image': 'https://hfjwilebkbsilqopcgdy.supabase.co/storage/v1/object/public/tractian-images/tractian-uploads/e5ac33f0-7b4a-4d99-8d7b-99e79d228a09.jpg'
				},
				{
					'_id': '633f0b1de2ff4fabbc718f0cawaw',
					'name': 'Pastilha',
					'description': 'Patilha de freio',
					'model': 'STARK',
					'owner': 'Tony Stark',
					'status': 'Stopped',
					'health_level': '100',
					'company_unit_id': '63406be9c5331330f16d29a2',
					'image': 'https://hfjwilebkbsilqopcgdy.supabase.co/storage/v1/object/public/tractian-images/tractian-uploads/e5ac33f0-7b4a-4d99-8d7b-99e79d228a09.jpg'
				},

			]
		}
	]
};

export default function CompanyOverView() {
	//const { companyData } = useContext(CompanyContext);
	//console.log(companyData);
	return (
		<CompanyGeneral>
			<SideMenu entityTitle={'UNITS'} entityArray={companyData.units} />
			<CompanyInfos>
				<TitleContainer>
					<div>
						<GlobalOutlined style={{ color: '#fff', fontSize: 40, marginRight: 22 }} />
						<h1>OVERVIEW</h1>
					</div>
					<p>{companyData.name}</p>
				</TitleContainer>
				<InfomationArea>
					<VerticalBanner units={companyData.units} />
					<div className='horizontalBannersContainer'>
						<ColumnChartBanner entityArray={companyData.units} />
						<PieChartBanner entityArray={companyData.units} />
					</div>
				</InfomationArea>
			</CompanyInfos>
		</CompanyGeneral>
	);
}

const InfomationArea = styled.div`
	padding-top: 76px;
	display: flex;

	.horizontalBannersContainer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 30px;
	}
`;

const TitleContainer = styled.div`
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
		font-size: 40px;
		color: white;
	}

	p{
		font-weight: 500;
		font-size: 20px;
		color: white;

	}
`;

const CompanyInfos = styled.main`	
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CompanyGeneral = styled.div`
	display: flex;
`;
