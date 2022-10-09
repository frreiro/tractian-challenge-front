import { createContext, useContext, useEffect, useState } from 'react';
import useUnit from '../hooks/api/useUnits.js';
import UserContext from './userContext.js';

const UnitContext = createContext();

export default UnitContext;

export function UnitProvider({ children }) {
	const [unitData, setUnitData] = useState(JSON.parse(localStorage.getItem('unit')));
	const [unitId, setUnitId] = useState(null);

	const { unit: unitAsync, unitError, unitIsLoading, getUnitInfo } = useUnit();
	const { userData } = useContext(UserContext);

	useEffect(() => {
		(async () => {
			try {
				const unitData = await getUnitInfo(unitId, userData.token);
				localStorage.setItem('unit', JSON.stringify(unitData));
				setUnitData(unitData);
			} catch (e) {

			}
		})();
	}, [unitId]);

	return <UnitContext.Provider value={{ unitData, setUnitData, setUnitId }} >
		{children}
	</UnitContext.Provider>;
}
