const customTheme = {
	chart: {
		backgroundColor: 'none',
		style: {
			fontFamily: 'Poppins',
			width: '100%',
			height: '100%',
			textAlign: 'center',
		},
	},
	title: {
		style: {
			color: '#fff',
			fontWeight: '500'
		},
	},

	yAxis: {
		gridLineColor: 'white',
		labels: {
			style: {
				color: 'white'
			}
		},
	},
	xAxis: {
		color: 'white',
		labels: {
			style: {
				color: 'white'
			}
		},
	},
	plotOptions: {
		column: {
			showInLegend: false,
		},
		bar: {
			showInLegend: false,
		}
	},
	series: [{
		color: 'white'
	}]
};

export default customTheme;

