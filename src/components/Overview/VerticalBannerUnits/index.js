import BannerEnitityHealthLevel from './BannerEntityHealthLevel.js';
import VerticalBanner, { BannerTitle } from '../../VerticalBanner/index.js';

export default function VerticalBannerUnits({ units }) {
	return (
		<VerticalBanner>
			<BannerTitle>Assets health level</BannerTitle>
			{units?.map(unit => {
				return unit.assets.map(asset => {
					return <BannerEnitityHealthLevel
						key={asset._id}
						name={asset.name}
						image={asset.image}
						healthLevel={asset.health_level}
						id={asset._id}
						unit={unit.name}
						unitId={unit._id}
					/>;
				});
			})}

		</VerticalBanner>
	);
}
