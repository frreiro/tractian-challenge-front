import { useState, useEffect } from 'react';

export default function useAsync(apiFuncion, isImmediate = true) {
	const [data, setData] = useState(null);
	const [isLoading, setisLoading] = useState(!isImmediate);
	const [error, setError] = useState(null);

	const asyncFunc = async (...args) => {
		setisLoading(true);
		setError(null);

		try {
			const data = await apiFuncion(...args);
			setData(data);
			setisLoading(false);
			return data;
		} catch (err) {
			setError(err);
			setisLoading(false);
			throw err;
		}
	};

	useEffect(() => {
		if (isImmediate) {
			asyncFunc();
		}
	}, []);

	return {
		data,
		isLoading,
		error,
		asyncFunc
	};
}
