import TooltipElement from './TooltipElement.js';

export default function CreateUnit({ callCreateUnit }) {
	async function formSubmit(e, text) {
		callCreateUnit(text);
	}

	return (
		<TooltipElement formSubmit={formSubmit} type={'Unit'} />
	);
}

