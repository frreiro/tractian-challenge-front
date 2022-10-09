import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/index.js';

import './assets/reset.css';
import './assets/styles.css';
import 'react-circular-progressbar/dist/styles.css';

import { UserProvider } from './contexts/userContext.js';
import { CompanyProvider } from './contexts/companyContext.js';

import CompanyOverView from './pages/CompanyOverview/index.js';
import UnitView from './pages/UnitView/index.js';

export default function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<CompanyProvider>
					<Routes>
						<Route path="/" element={<SignIn />} />
						<Route path="/company/:companyId" element={<CompanyOverView />} />
						<Route path="/unit/:id" element={<UnitView />} />

					</Routes>
				</CompanyProvider>
			</UserProvider>
		</BrowserRouter>
	);
}
