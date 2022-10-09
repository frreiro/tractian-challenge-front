import VerticalBanner from '../../VerticalBanner/index.js';
import BannerEnitityStatus from './BannerEntityStatus.js';
import { BannerTitle } from '../../VerticalBanner/index.js';
export default function VerticalBannerAssets({ unit }) {
	return (
		<VerticalBanner>
			<BannerTitle>{unit.name}'s assets</BannerTitle>
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

