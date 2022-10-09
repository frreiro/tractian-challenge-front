import { useContext } from 'react';
import CompanyContext from '../../contexts/companyContext.js';
import UserContext from '../../contexts/userContext.js';
import useNewUnit from '../../hooks/api/useNewUnit.js';
import TooltipElement from './TooltipElement.js';

export default function CreateUnit() {
	const { setNewUnit } = useNewUnit();
	const { userData } = useContext(UserContext);
	const { companyData } = useContext(CompanyContext);

	async function formSubmit(e, text) {
		console.log(e);
		try {
			await setNewUnit({ company_id: companyData._id, name: text }, userData.token);
		} catch (e) {

		}
	}

	return (
		<TooltipElement formSubmit={formSubmit} type={'Unit'} />
	);
}

