import { createContext, useState } from 'react';

const UnitContext = createContext();

export default UnitContext;

export function UnitProvider({ children }) {
	const [unitData, setUnitData] = useState(null);

	return <UnitContext.Provider value={{ unitData, setUnitData }} >
		{children}
	</UnitContext.Provider>;
}
