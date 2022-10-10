import { createContext, useContext, useEffect, useState } from 'react';
import useUnit from '../hooks/api/useUnits.js';
import UserContext from './userContext.js';

const UnitContext = createContext();

export default UnitContext;

export function UnitProvider({ children }) {
	const [unitData, setUnitData] = useState(JSON.parse(localStorage.getItem('unit')));

	const { unit: unitAsync, unitError, unitIsLoading, getUnitInfo } = useUnit();
	const { userData } = useContext(UserContext);

	async function getUnit(unitId) {
		try {
			const unitData = await getUnitInfo(unitId, userData.token);
			localStorage.setItem('unit', JSON.stringify(unitData));
			setUnitData(unitData);
		} catch (e) {

		}
	}
	return <UnitContext.Provider value={{ unitData, setUnitData, getUnit }} >
		{children}
	</UnitContext.Provider>;
}
