import VerticalBanner from '../VerticalBanner/index.js';
import styled from 'styled-components';
import IconsStatus from './IconsStatus.js';
import MediaQuery from 'react-responsive';
import EditableText from '../editableText.js';

export default function AssetInfoBanner({ asset, updateAsset }) {
	return (
		<VerticalBanner>
			<AssetImage src={asset.image} />
			<AssetMain>
				<AssetInfo>
					<h1>Model:</h1>
					<EditableText submitFuncion={(text) => updateAsset({ model: text })}>
						<p>{asset.model}</p>
					</EditableText>
				</AssetInfo>
				<AssetInfo>
					<h1>Owner:</h1>
					<EditableText submitFuncion={(text) => updateAsset({ owner: text })}>
						<p>{asset.owner}</p>
					</EditableText>

				</AssetInfo>
				<MediaQuery maxWidth={760}>
					<AssetInfo>
						<h1>Health Level:</h1>
						<EditableText submitFuncion={(text) => updateAsset({ health_level: text })}>
							<p>{asset.health_level}%</p>
						</EditableText>
					</AssetInfo>
				</MediaQuery>
				<AssetInfo>
					<h1>Status:</h1>
					<p>{asset.status}</p>
				</AssetInfo>

				<h1>Description:</h1>
				<EditableText submitFuncion={(text) => updateAsset({ description: text })}>
					<p>{asset.description}</p>
				</EditableText>
			</AssetMain>
			<MediaQuery maxWidth={760}>
				<IconsStatus updateStatus={updateAsset} />
			</MediaQuery>
		</VerticalBanner>
	);
}

const AssetMain = styled.div`
	width: 100%;
	padding-top: 30px;

	h1{	
		font-size: 15px;
	}

	p{
		font-size: 15px;
		color: white;
	}
`;

const AssetImage = styled.div`
	width: 100px;
	height: 100px;

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
