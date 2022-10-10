import React, { useContext } from 'react';
import styled from 'styled-components';
import UserSwiper from '../../components/UserSwiper/index.js';

import useLogin from '../../hooks/api/useLogIn.js';
import UserContext from '../../contexts/userContext.js';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function SignIn() {
	const { getUserToken } = useLogin();
	const { setUserData } = useContext(UserContext);
	const navigate = useNavigate();

	async function userSelected(user) {
		try {
			const userToken = await getUserToken(user._id);
			setUserData({ ...user, token: userToken });
			localStorage.setItem('userData', JSON.stringify({ ...user, token: userToken }));
			navigate(`/company/${user.company_id}`);
		} catch (e) {
			console.log(e);
			toast.error('Could not get user data');
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
