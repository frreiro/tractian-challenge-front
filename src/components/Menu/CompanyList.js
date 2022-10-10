import { DeleteOutlined, PlusCircleFilled } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import CompanyContext from '../../contexts/companyContext.js';

export default function CompanyList({ companies, deleteCompany, createCompany }) {
	const { companyData } = useContext(CompanyContext);
	const navigate = useNavigate();

	const [creating, setCreating] = useState(false);
	const [newCompany, setNewCompany] = useState(null);

	async function onSubmit(e) {
		e.preventDefault();
		createCompany(newCompany);
	}

	return (
		<CompanyUl>
			{companies.map(company => {
				return (
					<CompanyDiv key={company._id}>
						<li onClick={() => navigate(`/company/${company._id}`)}>
							{company.name}
						</li>
						{company._id === companyData._id ? <></>
							:
							<DeleteOutlined className='delete' onClick={() => deleteCompany(company._id)} />
						}
					</CompanyDiv>
				);
			})}
			{creating ?
				<form onSubmit={onSubmit}>
					<input onChange={(e) => setNewCompany(e.target.value)} />
				</form>
				:
				<PlusCircleFilled className="add" onClick={() => setCreating(true)} />
			}
		</CompanyUl>
	);
}

const CompanyDiv = styled.article`
	display: flex;
	align-items: center;
	position: relative;
	width: 100%;

	
	:hover{
			background-color: rgba(255, 255, 255,0.4)
	}

	.delete{
		position: absolute;
		right: 4px;
		cursor: pointer;
		font-size: 15px;
		color: white;
		margin-right: 10px;

		:hover{
			color: red;
		}
	}


`;

const CompanyUl = styled.ul`
	width: 90%;
	max-height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	overflow: scroll;

	border-radius: 0 0 5px 5px;
	background-color: rgba(255, 255, 255,0.4);

	input{
		width: 90%;
		border-radius: 5px;
		outline: none;
		border: none;
		margin-bottom: 5px;
	}

	li{
		width: 100%;
		
		font-style: normal;
		font-size: 15px;
		margin-bottom: 6px;
		color: white;
		cursor: pointer;

		padding-top: 5px;
		padding-bottom: 5px;
		padding-left: 20px;
		padding-right: 20px;

		border-radius: 5px;
		
	
	}

	::-webkit-scrollbar{
		display: none;
	}

	.add{
	cursor: pointer;
	font-size: 20px;
	color: white;
	padding: 10px
	}

`;

