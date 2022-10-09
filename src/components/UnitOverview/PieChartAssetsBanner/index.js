import PieChart from '../../charts/PieChart/index.js';
import HorizontalBanner from '../../HorizontalBanner/index.js';
import createAssetsStatusIterableFormatByUnit from './calculateAsssetsQuantityByUnit.js';

export default function PieChartAssetsBanner({ unit }) {
	const iterablePieFormat = createAssetsStatusIterableFormatByUnit(unit);

	const options = {
		chart: {
			type: 'pie',
		},
		title: {
			text: 'Assets status',
		},
		plotOptions: {
			pie: {
				innerSize: '45%'
			}
		},
		series: [{
			data: iterablePieFormat,
		}]
	};

	return (
		<HorizontalBanner>
			<PieChart options={options} />
		</HorizontalBanner>
	);
}
