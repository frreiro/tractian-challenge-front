import styled from 'styled-components';
import HorizontalBanner from '../HorizontalBanner/index.js';
import IconsStatus from './IconsStatus.js';

export default function AssetStatusBanner({ asset, updateAsset }) {
	return (
		<HorizontalBanner>
			<Container>
				<IconsStatus updateStatus={updateAsset} />
				<StatusInfo>
					<h1>Status:</h1>
					<p>{asset.status}</p>
				</StatusInfo>
			</Container>
		</HorizontalBanner>
	);
}

const StatusInfo = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1{
		font-size: 40px;
		padding-bottom: 15px;
		color: white;
	}

	p{
		font-size: 30px;
		font-weight: 500;
		color: white;

	}
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	margin: 10px; 

`;
