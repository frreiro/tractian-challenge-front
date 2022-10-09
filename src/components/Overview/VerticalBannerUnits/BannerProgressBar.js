import { CircularProgressbar } from 'react-circular-progressbar';
import styled from 'styled-components';

export default function BannerProgressBar({ porcentage }) {
	return (
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
	);
}

const ProgressbarContainer = styled.div`
	width: 49px;
	height: 49px
`;
