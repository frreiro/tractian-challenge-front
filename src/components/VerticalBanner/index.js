import styled from 'styled-components';

export default function VerticalBanner({ children }) {
	return (
		<VerticalBannerContainer>
			{children}
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
