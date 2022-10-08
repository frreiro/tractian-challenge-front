import styled from 'styled-components';
import BannerEnitity from './BannerEntity.js';

export default function VerticalBanner({ units }) {
	return (
		<VerticalBannerContainer>
			<h1>Assets health level</h1>
			{units?.map(unit => {
				return unit.assets.map(asset => {
					return <BannerEnitity
						key={asset._id}
						name={asset.name}
						image={asset.image}
						healthLevel={asset.health_level}
						unit={unit.name}
					/>;
				});
			})}

		</VerticalBannerContainer>
	);
}

const VerticalBannerContainer = styled.article`
	width:300px;
	height: 520px;
	background-color: #3525EB;
	border-radius: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 30px;


	h1{
		font-weight: 500;
		font-size: 20px;
		padding-top: 43px;
		color: white;
		margin-bottom: 53px;
	}
`;
