import styled from 'styled-components';

export default function HorizontalBanner({ children }) {
	return (
		<HorizontalBannerContainer>
			{children}
		</HorizontalBannerContainer>
	);
}

const HorizontalBannerContainer = styled.article`
	width: 420px;
	max-height: 190px;
	background-color: var(--banners-color);
	border-radius: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;

	.highcharts-root{
		width: 100%;
		height: 100%;
	}


	@media (max-width: 760px) {
		width: 320px;
		height: 165px;
		margin-bottom: 20px;
    }


`;
