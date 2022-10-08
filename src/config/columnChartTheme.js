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
			fontSize: '20px',
			fontWeight: '500'
		},
		margin: 50,
		y: 50
	},

	yAxis: {
		gridLineColor: 'white',
		gridLineWidth: 2,
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
				fontSize: '15px',
				color: 'white'
			}
		},
	},
	plotOptions: {
		column: {
			showInLegend: false,
		}
	},
	series: [{
		color: 'white'
	}]
};

export default customTheme;

