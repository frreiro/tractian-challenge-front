import { useContext } from 'react';
import { useNavigate } from 'react-router';
import CompanyContext from '../../contexts/companyContext.js';
import UserContext from '../../contexts/userContext.js';
import TooltipElement from './TooltipElement.js';

export default function CreateAsset() {
	const { userData } = useContext(UserContext);
	const { companyData } = useContext(CompanyContext);
	const navigate = useNavigate();

	async function formSubmit(e, text) {
		navigate('/create/asset', { state: { newAsset: text } });
	}

	return (
		<TooltipElement formSubmit={formSubmit} type={'Asset'} />
	);
}

