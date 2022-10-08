import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import customTheme from '../../config/columnChartTheme.js';
import createAssetsStatusIterableFormat from './calculatePorcentage.js';

export default function PieChart({ entityArray }) {
	Highcharts.setOptions(customTheme);

	const iterablePieFormat = createAssetsStatusIterableFormat(entityArray);

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

	function teste(e) {
		//console.log(e);
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
