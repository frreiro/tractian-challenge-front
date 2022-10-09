import { CircularProgressbar } from 'react-circular-progressbar';
import styled from 'styled-components';

export default function AssetHealthLevelBanner({ porcentage }) {
	return (
		<HorizontalBanner>
			<Title>Health Level</Title>
			<ProgressbarContainer>
				<CircularProgressbar value={porcentage} text={`${porcentage}%`} strokeWidth={10} styles={{
					path: {
						stroke: '#fff',
					},
					trail: {
						stroke: 'none',
					},
					text: {
						fontFamily: 'Poppins',
						fontWeight: 500,
						fontSize: '25px',
						fill: '#fff'
					},
				}} />
			</ProgressbarContainer>
		</HorizontalBanner>
	);
}

const Title = styled.h1`

	font-style: normal;
	font-weight: 700;
	font-size: 35px;
	padding-bottom: 25px;
	color: white;
	`;

const ProgressbarContainer = styled.div`
	width: 190px;
	height: 190px;
`;

const HorizontalBanner = styled.article`
	width: 540px;
	height: 100%;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 760px) {
		width: 320px;
		margin-bottom: 20px;
    }


`;

