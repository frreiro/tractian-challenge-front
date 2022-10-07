import { loginUser } from '../../services/users.api.js';
import useAsync from '../useAsync.js';

export default function useLogin() {
	const {
		data: userToken,
		error: loginError,
		isLoading: loginIsLoading,
		asyncFunc: getUserToken
	} = useAsync(loginUser, false);

	return {
		userToken,
		loginError,
		loginIsLoading,
		getUserToken
	};
}

