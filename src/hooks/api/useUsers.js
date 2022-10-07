import { getAllUsers } from '../../services/users.api.js';
import useAsync from '../useAsync.js';

export default function useUsers() {
	const {
		data: users,
		error: usersError,
		isLoading: usersIsLoading
	} = useAsync(getAllUsers);

	return {
		users,
		usersError,
		usersIsLoading
	};
}
