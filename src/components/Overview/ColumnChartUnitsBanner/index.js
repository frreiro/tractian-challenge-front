import BasicColumnChartUnits from '../../BasicColumChartUnits/index.js';
import HorizontalBanner from '../../HorizontalBanner/index.js';

export default function ColumnChartUnitsBanner({ entityArray }) {
	return (
		<HorizontalBanner>
			<BasicColumnChartUnits entityArray={entityArray} />
		</HorizontalBanner>
	);
}
