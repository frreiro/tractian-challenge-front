import BasicColumnChartHealthLevel from '../../BasicColumnChartHealthLevel/index.js';
import HorizontalBanner from '../../HorizontalBanner/index.js';

export default function ColumnChartHealthLevelBanner({ entityArray }) {
	return (
		<HorizontalBanner>
			<BasicColumnChartHealthLevel entityArray={entityArray} />
		</HorizontalBanner>
	);
}
