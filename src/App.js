import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/index.js';

import './assets/reset.css';
import './assets/styles.css';
import 'react-circular-progressbar/dist/styles.css';

import { UserProvider } from './contexts/userContext.js';
import CompanyOverView from './pages/CompanyOverview/index.js';
import { CompanyProvider } from './contexts/companyContext.js';

export default function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<CompanyProvider>
					<Routes>
						<Route path="/" element={<SignIn />} />
						<Route path="/company" element={<CompanyOverView />} />
					</Routes>
				</CompanyProvider>
			</UserProvider>
		</BrowserRouter>
	);
}
