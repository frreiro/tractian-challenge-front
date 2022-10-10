import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { GlobalOutlined, RocketOutlined, PlusCircleFilled, UserOutlined, DownOutlined, UpOutlined, CloseOutlined } from '@ant-design/icons';

import UnitContext from '../../contexts/unitContext.js';
import CompanyContext from '../../contexts/companyContext.js';
import UserContext from '../../contexts/userContext.js';
import CreateUnit from './CreateUnit.js';
import Tooltip from './Tooltip.js';
import CreateAsset from './CreateAsset.js';
import useCompanies from '../../hooks/api/useCompanies.js';
import CompanyList from './CompanyList.js';
import useDeleteCompany from '../../hooks/api/useDeleteCompany.js';
import useCreateCompany from '../../hooks/api/useCreateCompany.js';

export default function SideMenu({ entityTitle, entityArray, createUnit, closeMenu }) {
	const location = useLocation();
	const navigate = useNavigate();

	const [showCompanies, setShowCompanies] = useState(false);

	const { userData } = useContext(UserContext);
	const { unitData } = useContext(UnitContext);
	const { companyData } = useContext(CompanyContext);

	const { companiesData, getCompanies, companiesIsLoading } = useCompanies();
	const { deleteCompanyIsLoading, deleteCompany } = useDeleteCompany();
	const { createCompanyIsLoading, createCompany } = useCreateCompany();

	const currentLocation = location.pathname.split('/', 2).at(1);

	function setNextRoute() {
		if (currentLocation === 'company') return 'unit';
		if (currentLocation === 'unit') return 'asset';
		if (currentLocation === 'asset') return 'asset';
	}

	const [companies, setCompanies] = useState(companiesData);

	async function callDeleteCompany(companyId) {
		try {
			await deleteCompany(companyId, userData.token);
		} catch (e) {

		}
	}

	async function callCreateCompany(text) {
		if (text === '') return console.log('Empty name');
		try {
			await createCompany({ name: text }, userData.token);
		} catch (e) {

		}
	}

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
			} catch (e) {

			}
		})();
	}, [deleteCompanyIsLoading, createCompanyIsLoading]);

	if (currentLocation === 'company') return (
		<Menu>
			<MediaQuery maxWidth={1000}>
				<CloseOutlined onClick={() => closeMenu(false)} style={{ color: '#fff', fontSize: 20, position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }} />
			</MediaQuery>
			<div className='header'>
				{userData.is_admin && !companiesIsLoading
					? (
						<AdminCompanies showCompanies={showCompanies}>
							<div className="users" onClick={() => navigate('/')}>
								<UserOutlined style={{ color: '#fff', fontSize: 25, marginRight: 10 }} />
								<h1>Users</h1>
							</div>
							<div onClick={() => setShowCompanies(!showCompanies)}>
								<GlobalOutlined style={{ color: '#fff', fontSize: 15, marginRight: 10 }} />
								<h1>Companies</h1>
								{showCompanies
									?
									<UpOutlined style={{ color: '#fff', fontSize: 15, marginLeft: 10 }} />
									:
									<DownOutlined style={{ color: '#fff', fontSize: 15, marginLeft: 10 }} />

								}
							</div>
							{showCompanies ?
								(
									<CompanyList companies={companies} deleteCompany={callDeleteCompany} createCompany={callCreateCompany} />

								)
								: <></>
							}

						</AdminCompanies>
					)
					:
					<div className="users" onClick={() => navigate('/')}>
						<UserOutlined style={{ color: '#fff', fontSize: 25, marginRight: 10 }} />
						<h1>Users</h1>
					</div>
				}
			</div>
			<MenuUl>
				<Title>{entityTitle}</Title>
				{companyData.units?.map(entity => {
					return (
						<TitleEntity key={entity._id} onClick={() => navigate(`/${setNextRoute()}/${entity._id}`)}>{entity.name}</TitleEntity>
					);
				})}
			</MenuUl>
			<Tooltip content={currentLocation === 'company' ? <CreateUnit callCreateUnit={createUnit} /> : <CreateAsset />}>
				{userData.is_admin ? <PlusCircleFilled style={{ color: '#fff', fontSize: 35, marginTop: 10, cursor: 'pointer' }} /> : <></>}
			</Tooltip>
		</Menu>
	);

	else if (currentLocation === 'unit') return (
		<Menu>
			<MediaQuery maxWidth={1000}>
				<CloseOutlined onClick={() => closeMenu(false)} style={{ color: '#fff', fontSize: 20, position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }} />
			</MediaQuery>
			<div className='header'>
				<div className="unit" onClick={() => navigate(`/company/${companyData._id}`)} >
					<GlobalOutlined style={{ color: '#fff', fontSize: 25, marginRight: 10 }} />
					<h1>{companyData.name}</h1>
				</div>
			</div>
			<MenuUl>
				<Title>{entityTitle}</Title>
				{entityArray?.map(entity => {
					return (
						<TitleEntity key={entity._id} onClick={() => navigate(`/${setNextRoute()}/${entity._id}`)}>{entity.name}</TitleEntity>
					);
				})}
			</MenuUl>
			<Tooltip content={currentLocation === 'company' ? <CreateUnit callCreateUnit={createUnit} /> : <CreateAsset />}>
				{userData.is_admin ? <PlusCircleFilled style={{ color: '#fff', fontSize: 35, marginTop: 10, cursor: 'pointer' }} /> : <></>}
			</Tooltip>
		</Menu>
	);

	else return (
		<Menu>
			<MediaQuery maxWidth={1000}>
				<CloseOutlined onClick={() => closeMenu(false)} style={{ color: '#fff', fontSize: 20, position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }} />
			</MediaQuery>
			<div className='header'>
				<div className="asset" onClick={() => navigate(`/unit/${unitData._id}`)}>
					<RocketOutlined style={{ color: '#fff', fontSize: 25, marginRight: 10 }} />
					<h1>{unitData.name}</h1>
				</div>
			</div>
			<MenuUl>
				<Title>{entityTitle}</Title>
				{entityArray?.map(entity => {
					return (
						<TitleEntity key={entity._id} onClick={() => navigate(`/${setNextRoute()}/${entity._id}`)}>{entity.name}</TitleEntity>
					);
				})}
			</MenuUl>
			<Tooltip content={currentLocation === 'company' ? <CreateUnit callCreateUnit={createUnit} /> : <CreateAsset />}>
				{userData.is_admin ? <PlusCircleFilled style={{ color: '#fff', fontSize: 35, marginTop: 10, cursor: 'pointer' }} /> : <></>}
			</Tooltip>
		</Menu>
	);
}

const AdminCompanies = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	
	
	
	& > div:not(:last-of-type){
		margin-bottom: 15px;
		
	}


	
	div:last-of-type{
		width: 90%;
		padding: 5px;
		padding-bottom: 10px;
		border-radius: 5px 5px 0 0 ;
		background-color: ${props => props.showCompanies ? 'rgba(255, 255, 255,0.4)' : 'none'};

		:hover{
			background-color: rgba(255, 255, 255,0.4)
		}
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

const MenuUl = styled.ul`
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
`;

const Menu = styled.aside`
	width: 262px;
	height: 100vh;
	border-right: 1px solid white;
	display: flex;
	flex-direction: column;
	word-break: break-word;

	@media (max-width: 1000px) {
		width: 200px;

		padding-bottom: 12px;
		position:absolute;
		background-color: var(--banners-color);
		z-index: 2;



    }

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
