import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';

export default function SideMenu({ entityTitle, entityArray }) {
	const location = useLocation();
	const navigate = useNavigate();

	function setNextRoute() {
		const currentLocation = location.pathname.split('/', 2).at(1);
		if (currentLocation === 'company') return 'unit';
		if (currentLocation === 'unit') return 'asset';
	}

	return (
		<Menu>
			<ul>
				<Title>{entityTitle}</Title>
				{entityArray?.map(entity => {
					return (
						<TitleEntity key={entity._id} onClick={() => navigate(`/${setNextRoute()}/${entity._id}`)}>{entity.name}</TitleEntity>
					);
				})}
			</ul>
		</Menu>
	);
}

const Title = styled.li`
	font-weight: 700;
	font-size: 30px;
	line-height: 52px;
	margin-bottom: 40px;
	color: white;
`;

const TitleEntity = styled.li`
	font-style: normal;
	font-size: 25px;
	line-height: 52px;
	color: white;
	cursor: pointer;
`;

const Menu = styled.aside`
	width: 262px;
	height: 100vh;
	border-right: 1px solid white;

	ul{
		padding-top: 280px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;
