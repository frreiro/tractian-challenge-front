import { createContext, useState } from 'react';

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
	const [userData, setUserData] = useState(null);

	return <UserContext.Provider value={{ userData, setUserData }} >
		{children}
	</UserContext.Provider>;
}
