import BasicColumnChart from '../../charts/BasicColumChart/index.js';
import HorizontalBanner from '../../HorizontalBanner/index.js';

export default function ColumnChartUnitsBanner({ entityArray }) {
	const options = {
		chart: {
			type: 'column',
		},
		title: {
			text: 'Assets by units',
		},

		yAxis: {
			title: {
				enabled: false
			},
		},
		xAxis: {
			categories: entityArray.map(unit => unit.name)
		},
		series: [{
			data: entityArray.map(unit => unit.assets.length),
			color: 'white'
		}]
	};

	return (
		<HorizontalBanner>
			<BasicColumnChart options={options} />
		</HorizontalBanner>
	);
}
