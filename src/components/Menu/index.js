import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { GlobalOutlined, RocketOutlined, PlusCircleFilled, UserOutlined } from '@ant-design/icons';

import UnitContext from '../../contexts/unitContext.js';
import CompanyContext from '../../contexts/companyContext.js';
import UserContext from '../../contexts/userContext.js';
import CreateUnit from './CreateUnit.js';
import Tooltip from './Tooltip.js';
import CreateAsset from './CreateAsset.js';

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
			<div className='header'>
				{currentLocation === 'unit'
					? (
						<div onClick={() => navigate(`/company/${companyData._id}`)} >
							<GlobalOutlined style={{ color: '#fff', fontSize: 45, marginRight: 10 }} />
							<h1>{companyData.name}</h1>
						</div>

					)
					: currentLocation === 'asset'
						? (
							<div onClick={() => navigate(`/unit/${unitData._id}`)}>
								<RocketOutlined style={{ color: '#fff', fontSize: 45, marginRight: 10 }} />
								<h1>{unitData.name}</h1>
							</div>
						)
						: userData.is_admin
							? (
								<div onClick={() => navigate('/')}>
									<UserOutlined style={{ color: '#fff', fontSize: 35, marginRight: 10 }} />
									<h1>Users</h1>
								</div>
							)
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
			<Tooltip content={currentLocation === 'company' ? <CreateUnit /> : <CreateAsset />}>
				{userData.is_admin ? <PlusCircleFilled style={{ color: '#fff', fontSize: 35, marginTop: 10, cursor: 'pointer' }} /> : <></>}
			</Tooltip>
		</Menu >
	);
}

const Title = styled.li`
	font-weight: 700;
	font-size: 30px;
	margin-bottom: 20px;
	color: white;
`;

const TitleEntity = styled.li`
	width: 100%;
	font-style: normal;
	font-size: 20px;
	margin-bottom: 6px;
	color: white;
	cursor: pointer;
	padding: 5px;
	border-radius: 5px;
	
	:hover{
		background-color: rgba(255, 255, 255,0.4)
	}
`;

const Menu = styled.aside`
	width: 262px;
	height: 100vh;
	border-right: 1px solid white;
	display: flex;
	flex-direction: column;
	align-items: center;
	word-break: break-word;

	h1{
		color: white;
	}

	ul{
		width: 100%;
		max-height: calc(100vh - 35px);
		padding-top: 60px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		overflow: scroll;

		::-webkit-scrollbar{
			visibility: hidden;
		}
	}

	.header{
		padding-top: 20px;
		cursor: pointer;
		justify-content: center;

		div{
			display: flex;
			justify-content: center;
			align-items: center;

			h1{
				width: 60%;
			}
		}
	}

	div{
		display: flex;
		justify-content: center;
		/*padding-left: 40px;
		padding-top: 50px;*/

	}
`;
