import { createContext, useState } from 'react';

const UnitContext = createContext();

export default UnitContext;

export function UnitProvider({ children }) {
	const [unitData, setUnitData] = useState(JSON.parse(localStorage.getItem('unit')));

	return <UnitContext.Provider value={{ unitData, setUnitData }} >
		{children}
	</UnitContext.Provider>;
}
