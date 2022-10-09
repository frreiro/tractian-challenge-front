import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { GlobalOutlined, RocketOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import UnitContext from '../../../contexts/unitContext.js';
import CompanyContext from '../../../contexts/companyContext.js';
import UserContext from '../../../contexts/userContext.js';

export default function SideMenu({ entityTitle, entityArray }) {
	const location = useLocation();
	const navigate = useNavigate();

	const { userData } = useContext(UserContext);
	const { unitData } = useContext(UnitContext);
	const { companyData } = useContext(CompanyContext);

	const currentLocation = location.pathname.split('/', 2).at(1);

	function setNextRoute() {
		if (currentLocation === 'company') return 'unit';
		if (currentLocation === 'unit') return 'asset';
		if (currentLocation === 'asset') return 'asset';
	}

	return (
		<Menu>
			<div>
				{currentLocation === 'unit'
					? <GlobalOutlined style={{ color: '#fff', fontSize: 45, marginRight: 22 }} onClick={() => navigate(`/company/${companyData._id}`)} />
					: currentLocation === 'asset'
						? <RocketOutlined style={{ color: '#fff', fontSize: 45, marginRight: 22 }} onClick={() => navigate(`/unit/${unitData._id}`)} />
						: <></>}

			</div>

			<ul>
				<Title>{entityTitle}</Title>
				{entityArray?.map(entity => {
					return (
						<TitleEntity key={entity._id} onClick={() => navigate(`/${setNextRoute()}/${entity._id}`)}>{entity.name}</TitleEntity>
					);
				})}
			</ul>
		</Menu>
	);
}

const Title = styled.li`
	font-weight: 700;
	font-size: 30px;
	line-height: 52px;
	margin-bottom: 40px;
	color: white;
`;

const TitleEntity = styled.li`
	font-style: normal;
	font-size: 25px;
	line-height: 52px;
	color: white;
	cursor: pointer;
`;

const Menu = styled.aside`
	width: 262px;
	height: 100vh;
	border-right: 1px solid white;
	/*padding-left: 10px;*/
	ul{
		padding-top: 280px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	div{
		padding-left: 40px;
		padding-top: 50px;

	}
`;
