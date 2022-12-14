import styled from 'styled-components';
import { PlayCircleOutlined, CloseCircleOutlined, WarningOutlined } from '@ant-design/icons';

export default function IconsStatus({ updateStatus }) {
	return (
		<IconsContainer>
			<CloseCircleOutlined style={{ color: '#EF1515', fontSize: 20 }} onClick={() => updateStatus({ status: 'Stopped' })} />
			<WarningOutlined style={{ color: '#FEE611', fontSize: 20 }} onClick={() => updateStatus({ status: 'Alerting' })} />
			<PlayCircleOutlined style={{ color: '#0AFF31', fontSize: 20 }} onClick={() => updateStatus({ status: 'Running' })} />

		</IconsContainer>
	);
}

const IconsContainer = styled.div`
	width: 10%;
	display: flex;
	flex-direction: column;
	align-items: center;

	*:not(:last-child){
		margin-bottom: 15px;
	}
	

	@media (max-width: 760px) {
		width: 300px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-top: 20px;
		position: absolute;

		bottom: 0;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 20px;
		
		*:not(:last-child){
			margin-bottom: 0px;
		}
    }

`;
