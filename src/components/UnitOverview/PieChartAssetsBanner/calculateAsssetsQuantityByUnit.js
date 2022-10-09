export default function createAssetsStatusIterableFormatByUnit(unit) {
	const status = {};
	unit.assets.forEach(asset => {
		if (status[asset.status] === undefined) status[asset.status] = 1;
		else {
			status[asset.status] = status[asset.status] + 1;
		};
	});

	const iterablePieFormat = [];
	for (const statusName in status) {
		const pieObjectFormat = {
			name: statusName.toString(),
			y: status[statusName],
			color: addProprietyColor(statusName),
		};

		iterablePieFormat.push(pieObjectFormat);
	}
	return iterablePieFormat;
}

function addProprietyColor(statusName) {
	const ALERT_COLOR = '#FFB800';
	const STOPPED_COLOR = '#EF1515';
	const RUNNING_COLOR = '#52FF01';

	if (statusName === 'Running') return RUNNING_COLOR;
	else if (statusName === 'Alerting') return ALERT_COLOR;
	else return STOPPED_COLOR;
}

