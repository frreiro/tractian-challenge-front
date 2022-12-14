import styled from 'styled-components';
import { useNavigate } from 'react-router';
import BannerProgressBar from './BannerProgressBar.js';
import { useContext } from 'react';
import UnitContext from '../../../contexts/unitContext.js';

export default function BannerEnitityHealthLevel({ name, image, unit, healthLevel, id, unitId }) {
	const navigate = useNavigate();
	const { getUnit } = useContext(UnitContext);

	async function redirectToAsset() {
		await getUnit(unitId);
		navigate('/asset/' + id);
	}

	return (
		<EntityContainer onClick={redirectToAsset}>
			<section>
				<EntityImage src={image} />
				<div>
					<EntityTitle>{name}</EntityTitle>
					<EntitySubtitle>{unit}</EntitySubtitle>
				</div>
			</section>
			<BannerProgressBar porcentage={healthLevel} />
		</EntityContainer>
	);
}

export const EntityTitle = styled.p`
	font-weight: 500;
	font-size: 15px;
	font-style: normal;
	color: white;
`;

export const EntitySubtitle = styled.p`
	font-weight: 300;
	font-size: 10px;
	font-style: normal;
	color: white;

`;

export const EntityImage = styled.img`
	width: 46px;
	height: 46px;
	border-radius: 50%;
	background-color: white;
	margin-right: 14px;
`;

export const EntityContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	padding: 5px 20px 5px 20px;
	margin-bottom: 5px;
	cursor: pointer;
	border-radius: 14px;

	:hover{
		background-color: rgba(255, 255, 255, 0.1);
	}

	section{
		display: flex;
	}

	div{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;
