import styled from 'styled-components';
import { CheckOutlined, CloseOutlined, WarningOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

export default function BannerEnitityStatus({ name, image, unit, status, id }) {
	const navigate = useNavigate();

	return (
		<EntityContainer onClick={() => navigate('/asset/' + id)}>
			<section>
				<EntityImage src={image} />
				<div>
					<EntityTitle>{name}</EntityTitle>
					<EntitySubtitle>{unit}</EntitySubtitle>
				</div>
			</section>
			{
				status === 'Running' ?
					<CheckOutlined style={{ color: '#0AFF31', fontSize: 20 }} />
					: status === 'Stopped' ?
						<CloseOutlined style={{ color: '#EF1515', fontSize: 20 }} />
						:
						<WarningOutlined style={{ color: '#FEE611', fontSize: 20 }} />

			}
		</EntityContainer>
	);
}

const EntityTitle = styled.p`
	font-weight: 500;
	font-size: 15px;
	font-style: normal;
	color: white;
`;

const EntitySubtitle = styled.p`
	font-weight: 300;
	font-size: 10px;
	font-style: normal;
	color: white;

`;

const EntityImage = styled.img`
	width: 46px;
	height: 46px;
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
