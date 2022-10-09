import { useContext } from 'react';
import { useNavigate } from 'react-router';
import CompanyContext from '../../contexts/companyContext.js';
import UserContext from '../../contexts/userContext.js';
import useNewUnit from '../../hooks/api/useNewUnit.js';
import TooltipElement from './TooltipElement.js';

export default function CreateAsset() {
	const { setNewUnit } = useNewUnit();
	const { userData } = useContext(UserContext);
	const { companyData } = useContext(CompanyContext);
	const navigate = useNavigate();

	async function formSubmit(e, text) {
		navigate('/asset/create', { state: { newAsset: text } });
		//try {
		//	await setNewUnit({ company_id: companyData._id, name: text }, userData.token);
		//} catch (e) {

		//}
	}

	return (
		<TooltipElement formSubmit={formSubmit} type={'Asset'} />
	);
}

