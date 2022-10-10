import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { GlobalOutlined, RocketOutlined, PlusCircleFilled, UserOutlined } from '@ant-design/icons';

import UnitContext from '../../contexts/unitContext.js';
import CompanyContext from '../../contexts/companyContext.js';
import UserContext from '../../contexts/userContext.js';
import CreateUnit from './CreateUnit.js';
import Tooltip from './Tooltip.js';
import CreateAsset from './CreateAsset.js';
import useCompanies from '../../hooks/api/useCompanies.js';

export default function SideMenu({ entityTitle, entityArray }) {
	const location = useLocation();
	const navigate = useNavigate();

	const { userData } = useContext(UserContext);
	const { unitData } = useContext(UnitContext);
	const { companyData } = useContext(CompanyContext);

	const { companiesData, getCompanies, companiesIsLoading } = useCompanies();
	const currentLocation = location.pathname.split('/', 2).at(1);

	function setNextRoute() {
		if (currentLocation === 'company') return 'unit';
		if (currentLocation === 'unit') return 'asset';
		if (currentLocation === 'asset') return 'asset';
	}

	const [companies, setCompanies] = useState(companiesData);

	useEffect(() => {
		if (companiesData) {
			setCompanies(companiesData);
		}
	}, [companiesData]);

	useEffect(() => {
		(async () => {
			try {
				const companies = await getCompanies();
				setCompanies(companies);
				console.log(companies);
			} catch (e) {

			}
		})();
	}, []);

	return (
		<Menu>
			<div className='header'>
				{currentLocation === 'unit'
					? (
						<div className="unit" onClick={() => navigate(`/company/${companyData._id}`)} >
							<GlobalOutlined style={{ color: '#fff', fontSize: 25, marginRight: 10 }} />
							<h1>{companyData.name}</h1>
						</div>

					)
					: currentLocation === 'asset'
						? (
							<div className="asset" onClick={() => navigate(`/unit/${unitData._id}`)}>
								<RocketOutlined style={{ color: '#fff', fontSize: 25, marginRight: 10 }} />
								<h1>{unitData.name}</h1>
							</div>
						)
						: userData.is_admin && !companiesIsLoading
							? (
								<AdminCompanies>
									<div>
										<GlobalOutlined style={{ color: '#fff', fontSize: 25, marginRight: 10 }} />
										<h1>Companies</h1>
									</div>
									<select onChange={(e) => navigate(`/company/${e.target.value}`)} defaultValue={companyData._id}>
										{companies.map(company => {
											return <option key={company._id} value={company._id} >{company.name}</option>;
										})}
									</select>
									<div className="users" onClick={() => navigate('/')}>
										<UserOutlined style={{ color: '#fff', fontSize: 25, marginRight: 10 }} />
										<h1>Users</h1>
									</div>
								</AdminCompanies>
							)
							:
							<div className="users" onClick={() => navigate('/')}>
								<UserOutlined style={{ color: '#fff', fontSize: 25, marginRight: 10 }} />
								<h1>Users</h1>
							</div>
				}

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

const AdminCompanies = styled.div`
	display: flex;
	flex-direction: column;



	div:not(:last-child){
		margin-bottom: 5px;
	}


	select{
		width: 80%;
		border: none;
		outline: none;
		background-color: white;
		padding: 5px;

		border-radius: 5px;

		color: #1E3A8A;
		font-family: 'Poppins';
		font-size: 14px;
		
		margin-bottom: 15px;
	}

	option:hover {
		color: white;

	}

	option{
		border-radius: 5px;
		width: 100%;
		padding: 5px;
	}
`;

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
	word-break: break-word;

	h1{
		color: white;
	}

	.users{
		width: 100%;
		border-radius: 5px;
		padding: 5px;

		:hover{
		background-color: rgba(255, 255, 255,0.4)
		}
	}

	.unit{
		width: 100%;
		padding: 5px;
		border-radius: 5px;
		
		
		
		:hover{
		background-color: rgba(255, 255, 255,0.4)
		}

		h1{
			width: 60%;
		}
	}

	.asset{
		width: 100%;
		display: flex;
		padding: 5px;
		border-radius: 5px;
		justify-content: center;
		align-items: center;

		:hover{
		background-color: rgba(255, 255, 255,0.4)
		}

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
			display: none;
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

		}
	}


	div{
		display: flex;
		justify-content: center;

	}
`;
