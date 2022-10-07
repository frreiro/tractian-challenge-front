import React from 'react';
import styled from 'styled-components';
import UserSwiper from '../../components/UserSwiper/index.js';

export default function SignIn() {
	return (
		<Screen>
			<TractianTitle>TRACTIAN</TractianTitle>
			<SecondTitle>Escolha seu login</SecondTitle>
			<div>
				<UserSwiper />
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
