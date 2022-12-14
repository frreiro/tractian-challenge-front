import PieChart from '../../charts/PieChart/index.js';
import HorizontalBanner from '../../HorizontalBanner/index.js';
import createAssetsStatusIterableFormatByCompany from './calculateAssetsQuantityByCompany.js';

export default function PieChartStatusBanner({ entityArray }) {
	const iterablePieFormat = createAssetsStatusIterableFormatByCompany(entityArray);

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
