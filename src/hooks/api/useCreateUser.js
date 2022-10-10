import { createUser } from '../../services/users.api.js';
import useAsync from '../useAsync.js';

export default function useCreateUsers() {
	const {
		data: createUserData,
		error: createUserError,
		isLoading: createUserIsLoading,
		asyncFunc: crateUserSubmit
	} = useAsync(createUser);

	return {
		createUser,
		createUserError,
		createUserIsLoading,
		crateUserSubmit
	};
}
