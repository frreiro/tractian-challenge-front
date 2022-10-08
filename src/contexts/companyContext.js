import { createContext, useState } from 'react';

const CompanyContext = createContext();

export default CompanyContext;

export function CompanyProvider({ children }) {
	const [companyData, setCompanyData] = useState(null);

	return <CompanyContext.Provider value={{ companyData, setCompanyData }} >
		{children}
	</CompanyContext.Provider>;
}
