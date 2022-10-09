import VerticalBanner from '../../VerticalBanner/index.js';
import BannerEnitityStatus from './BannerEntityStatus.js';

export default function VerticalBannerAssets({ unit }) {
	return (
		<VerticalBanner>
			<h1>{unit.name}'s assets</h1>
			{unit.assets.map(asset => {
				return <BannerEnitityStatus
					key={asset._id}
					name={asset.name}
					image={asset.image}
					status={asset.status}
					unit={unit.name}
				/>;
			})}
		</VerticalBanner>
	);
}
