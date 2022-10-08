import HorizontalBanner from '../../HorizontalBanner/index.js';
import PieChart from '../../PieChart/index.js';

export default function PieChartStatusBanner({ entityArray }) {
	return (
		<HorizontalBanner>
			<PieChart entityArray={entityArray} />
		</HorizontalBanner>
	);
}
