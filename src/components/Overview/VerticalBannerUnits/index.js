import BannerEnitityHealthLevel from './BannerEntityHealthLevel.js';
import VerticalBanner from '../../VerticalBanner/index.js';

export default function VerticalBannerUnits({ units }) {
	return (
		<VerticalBanner>
			<h1>Assets health level</h1>
			{units?.map(unit => {
				return unit.assets.map(asset => {
					return <BannerEnitityHealthLevel
						key={asset._id}
						name={asset.name}
						image={asset.image}
						healthLevel={asset.health_level}
						unit={unit.name}
					/>;
				});
			})}

		</VerticalBanner>
	);
}
