import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useCompanies from '../../hooks/api/useCompanies.js';
import useCreateUsers from '../../hooks/api/useCreateUser.js';
import useUsers from '../../hooks/api/useUsers.js';
import { Container } from './TooltipElement.js';

export default function CreateUser({ setNewUsers }) {
	const { register, formState: { errors }, handleSubmit } = useForm({
		criteriaMode: 'all',
	});
	const { companiesData, companiesIsLoading, getCompanies } = useCompanies();
	const { createUserData, createUserIsLoading, crateUserSubmit } = useCreateUsers();
	const { getAllUsersAsync } = useUsers();
	const [companies, setCompanies] = useState(companiesData);

	useEffect(() => {
		if (companiesData) {
			setCompanies(companiesData);
		}
	}, [companiesData]);

	useEffect(() => {
		(async () => {
			try {
				const companies = await getCompanies();
				setCompanies(companies);
			} catch (e) {

			}
		})();
	}, []);

	async function onSubmit(data) {
		const picture = data.picture[0];
		console.log(data);
		console.log({ ...data, picture: picture });
		try {
			await crateUserSubmit({ ...data, picture: picture });
			const users = await getAllUsersAsync();
			setNewUsers(users);
		} catch (e) {

		}
	}

	return companiesIsLoading ? 'Carregando...' : (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
				<label htmlFor="file">User Picture</label>
				<input id="file" type="file" accept='image/*' {...register('picture')} />
				<label htmlFor='name'>User Name</label>
				<input id="name " placeholder="Name" type="text"  {...register('name')} />
				<select {...register('company_id')}>
					{companies.map(company => <option key={company._id} value={company._id}>{company.name}</option>)}

				</select>
				<button>Enviar</button>
			</form>
		</Container >
	);
}
