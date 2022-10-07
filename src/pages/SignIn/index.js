import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import UserSwiper from '../../components/UserSwiper/index.js';

const { Title } = Typography;

export default function SignIn() {
	return (
		<Screen>
			<TractianTitle level={1}>TRACTIAN</TractianTitle>
			<SecondTitle level={3}>Escolha seu login</SecondTitle>
			<div>
				<UserSwiper />
			</div>
		</Screen>
	);
}

const TractianTitle = styled(Title)`
	font-size: 96px;
	color: white;
	margin-bottom: 10px;
`;

const SecondTitle = styled(Title)`
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
`;
