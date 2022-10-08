import HorizontalBanner from '../../HorizontalBanner/index.js';
import PieChart from '../../PieChart/index.js';

export default function PieChartBanner({ entityArray }) {
	return (
		<HorizontalBanner>
			<PieChart entityArray={entityArray} />
		</HorizontalBanner>
	);
}
