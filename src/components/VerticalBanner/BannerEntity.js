import styled from 'styled-components';
import BannerProgressBar from './BannerProgressBar.js';

export default function BannerEnitity({ name, image, unit, healthLevel }) {
	return (
		<EntityContainer>
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

const EntityTitle = styled.p`
	font-weight: 500;
	font-size: 20px;
	font-style: normal;
	color: white;
`;

const EntitySubtitle = styled.p`
	font-weight: 300;
	font-size: 15px;
	font-style: normal;
	color: white;

`;

const EntityImage = styled.img`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	background-color: white;
	margin-right: 14px;
`;

const EntityContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 20px;

	section{
		display: flex;
	}

	div{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;
