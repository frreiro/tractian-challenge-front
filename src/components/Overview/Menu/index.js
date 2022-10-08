import styled from 'styled-components';
const items = [
	{ label: 'item 1', key: 'item-1' }, // remember to pass the key prop
	{ label: 'item 2', key: 'item-2' }, // which is required
	{ label: 'item 3', key: 'item-3' },
];

export default function SideMenu({ entityTitle, entityArray }) {
	return (
		<Menu>
			<ul>
				<Title>{entityTitle}</Title>
				{entityArray.map(entity => {
					return (
						<TitleEntity key={entity._id}>{entity.name}</TitleEntity>
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
