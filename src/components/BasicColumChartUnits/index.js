import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import customTheme from '../../config/columnChartTheme.js';

export default function BasicColumnChartUnits({ entityArray }) {
	Highcharts.setOptions(customTheme);
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

	function teste(e) {
	}
	return (
		<>
			<HighchartsReact
				options={options}
				highcharts={Highcharts}
				allowChartUpdate={true}
				updateArgs={[true, true, true]}
				immutable={false}
				callback={teste}
			/>
		</>
	);
}
