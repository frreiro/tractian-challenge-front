import BasicColumnChart from '../../charts/BasicColumChart/index.js';
import HorizontalBanner from '../../HorizontalBanner/index.js';

export default function ColumnChartAssetsBanner({ unit }) {
	const options = {
		chart: {
			type: 'column',
		},
		title: {
			text: 'Assets health level',
		},

		yAxis: {
			title: {
				enabled: false
			},
		},
		xAxis: {
			categories: unit.assets.map(asset => asset.name),
		},
		series: [{
			data: unit.assets.map(asset => parseFloat(asset.health_level)),
			color: 'white'
		}]
	};

	return (
		<HorizontalBanner>
			<BasicColumnChart options={options} />
		</HorizontalBanner>
	);
}
