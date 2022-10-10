import { CircularProgressbar } from 'react-circular-progressbar';
import styled from 'styled-components';
import EditableComponent from '../editableComponent.js';

export default function AssetHealthLevelBanner({ porcentage, updateAsset }) {
	return (
		<HorizontalBanner>
			<Title>Health Level</Title>
			<ProgressbarContainer>
				<EditableComponent submitFuncion={(value) => updateAsset({ health_level: value })}>
					<CircularProgressbar value={porcentage} text={`${porcentage}%`} strokeWidth={10} styles={{
						path: {
							stroke: '#fff',
							cursor: 'pointer'
						},
						trail: {
							stroke: 'none',
							cursor: 'pointer'
						},
						text: {
							fontFamily: 'Poppins',
							fontWeight: 500,
							fontSize: '25px',
							fill: '#fff',
							cursor: 'pointer'
						},
					}} />
				</EditableComponent>
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

