import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/index.js';

import './assets/reset.css';
import './assets/styles.css';
import 'react-circular-progressbar/dist/styles.css';

import { UserProvider } from './contexts/userContext.js';
import { UnitProvider } from './contexts/unitContext.js';

import CompanyOverView from './pages/CompanyOverview/index.js';
import UnitView from './pages/Dashboard/UnitView.js';
import AssetView from './pages/Dashboard/AssetView.js';
import { CompanyProvider } from './contexts/companyContext.js';
import CreateAsset from './components/Menu/CreateAsset.js';
import CreateAssetView from './pages/Dashboard/CreateAssetView.js';

export default function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<CompanyProvider>
					<UnitProvider>
						<Routes>
							<Route path="/" element={<SignIn />} />
							<Route path="/company/:companyId" element={<CompanyOverView />} />
							<Route path="/unit/:unitId" element={<UnitView />} />
							<Route path="/asset/:assetId" element={<AssetView />} />
							<Route path="/create/asset" element={<CreateAssetView />} />
						</Routes>
					</UnitProvider>
				</CompanyProvider>
			</UserProvider>
		</BrowserRouter>
	);
}
