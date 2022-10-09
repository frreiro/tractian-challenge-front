import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import customTheme from '../../../config/columnChartTheme.js';

export default function PieChart({ options }) {
	Highcharts.setOptions(customTheme);

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
