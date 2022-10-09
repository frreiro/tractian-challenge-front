import VerticalBanner from '../VerticalBanner/index.js';
import styled from 'styled-components';
import IconsStatus from './IconsStatus.js';
import MediaQuery from 'react-responsive';

export default function AssetInfoBanner({ asset, updateStatus }) {
	return (
		<VerticalBanner>
			<AssetImage src={asset.image} />
			<AssetMain>
				<AssetInfo>
					<h1>Model:</h1>
					<p>{asset.model}</p>
				</AssetInfo>
				<AssetInfo>
					<h1>Owner:</h1>
					<p>{asset.owner}</p>
				</AssetInfo>
				<MediaQuery maxWidth={760}>
					<AssetInfo>
						<h1>Health Level:</h1>
						<p>{asset.health_level}%</p>
					</AssetInfo>
				</MediaQuery>
				<AssetInfo>
					<h1>Status:</h1>
					<p>{asset.status}</p>
				</AssetInfo>

				<h1>Description:</h1>
				<p>{asset.description}</p>
			</AssetMain>
			<MediaQuery maxWidth={760}>
				<IconsStatus updateStatus={updateStatus} />
			</MediaQuery>
		</VerticalBanner>
	);
}

const AssetMain = styled.div`
	width: 100%;
	padding-top: 40px;

	p{
		color: white;
	}
`;

const AssetImage = styled.div`
	width: 160px;
	height: 160px;

	border-radius: 50%;
	
	background: url(${props => props.src});
	background-color: white;
	background-size: cover;
	
`;

const AssetInfo = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 20px;

	h1{
		padding-right: 10px;
	}


	@media (max-width: 760px) {
		padding-bottom: 12px;
		position: relative;
    }


`;
