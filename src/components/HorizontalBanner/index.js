import styled from 'styled-components';
import BasicColumnChart from '../BasicColumChart/index.js';

//import 'highcharts/css/highcharts.css';

export default function HorizontalBanner({ children }) {
	return (
		<HorizontalBannerContainer>
			{children}
		</HorizontalBannerContainer>
	);
}

const HorizontalBannerContainer = styled.article`
	width:540px;
	height: 245px;
	background-color: #3525EB;
	border-radius: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.highcharts-root{
		padding: 10px;

	}
	.highcharts-root{
		width: 100%;
		height: 100%;
	}

`;
