import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import customTheme from '../../config/columnChartTheme.js';

export default function BasicColumnChartHealthLevel({ entityArray }) {
	console.log(entityArray?.flatMap(unit => unit.assets.map(asset => asset.name)));
	console.log(entityArray.flatMap(unit => unit.assets.map(asset => parseFloat(asset.health_level))));
	Highcharts.setOptions(customTheme);
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
			categories: entityArray?.flatMap(unit => unit.assets.map(asset => asset.name))
		},
		series: [{
			data: entityArray.flatMap(unit => unit.assets.map(asset => parseFloat(asset.health_level))),
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
