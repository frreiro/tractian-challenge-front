import BasicColumnChart from '../../BasicColumChart/index.js';
import HorizontalBanner from '../../HorizontalBanner/index.js';

export default function ColumnChartBanner({ entityArray }) {
	return (
		<HorizontalBanner>
			<BasicColumnChart entityArray={entityArray} />
		</HorizontalBanner>
	);
}
