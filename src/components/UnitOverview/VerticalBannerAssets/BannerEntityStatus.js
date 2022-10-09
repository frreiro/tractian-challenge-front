import { CheckOutlined, CloseOutlined, WarningOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { EntityContainer, EntityImage, EntitySubtitle, EntityTitle } from '../../Overview/VerticalBannerUnits/BannerEntityHealthLevel.js';

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
