import React, { useContext } from 'react';
import styled from 'styled-components';
import UserSwiper from '../../components/UserSwiper/index.js';

import useLogin from '../../hooks/api/useLogIn.js';
import useCompanyOverview from '../../hooks/api/useCompanyOverview.js';
import UserContext from '../../contexts/userContext.js';
import CompanyContext from '../../contexts/companyContext.js';
import { useNavigate } from 'react-router';

export default function SignIn() {
	const { getUserToken } = useLogin();
	const { getCompanyOverall } = useCompanyOverview();
	const { setUserData } = useContext(UserContext);
	const { setCompanyData } = useContext(CompanyContext);
	const navigate = useNavigate();

	async function userSelected(user) {
		try {
			const userToken = await getUserToken(user._id);
			setUserData({ ...user, token: userToken });
			const companyData = await getCompanyOverall(user.company_id, userToken);
			setCompanyData(companyData);
			navigate('/company');
		} catch (e) {

		}
	}

	return (
		<Screen>
			<TractianTitle>TRACTIAN</TractianTitle>
			<SecondTitle>Escolha seu login</SecondTitle>
			<div>
				<UserSwiper selectUser={userSelected} />
			</div>
		</Screen>
	);
}

const TractianTitle = styled.h1`
	font-size: 96px;
	color: white;
	margin-bottom: 10px;
`;

const SecondTitle = styled.h4`
	font-size: 36px;
	color: white;
	font-weight: normal;
	margin-bottom: 60px;
`;

const Screen = styled.div`
	height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 760px) {
		${TractianTitle}{
			font-size: 86px;
		}

		${SecondTitle}{
			font-size: 26px;
		}
    }
`;
