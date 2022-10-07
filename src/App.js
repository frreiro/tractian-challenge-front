import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/index.js';

import './assets/reset.css';
import './assets/styles.css';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}
