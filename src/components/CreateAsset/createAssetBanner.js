import styled from 'styled-components';
import VerticalBanner from '../VerticalBanner/index.js';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import UnitContext from '../../contexts/unitContext.js';
import useNewAsset from '../../hooks/api/useNewAsset.js';
import UserContext from '../../contexts/userContext.js';
import { useNavigate } from 'react-router';

export default function CreateAssetBanner({ assetName }) {
	const { register, formState: { errors }, handleSubmit, watch } = useForm({
		criteriaMode: 'all',
	});
	const { createNewAsset } = useNewAsset();
	const { unitData } = useContext(UnitContext);
	const { userData } = useContext(UserContext);

	const navigate = useNavigate();

	async function onSubmit(formData) {
		if (formData.image.length <= 0) return console.log('Adicione uma imagem');
		const image = formData.image[0];

		const newAsset = {
			...formData,
			image,
			company_unit_id: unitData._id,
			health_level: parseInt(formData.health_level),
			name: assetName
		};

		try {
			await createNewAsset(newAsset, userData.token);
			navigate(-1);
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<VerticalBanner>
			<AssetForm onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
				<UploadElement>
					<UploadLabel htmlFor='fileType'>Upload Foto</UploadLabel>
					<input type="file" id="fileType" accept='image/*'{...register('image')} />
				</UploadElement>
				<div>
					<h1>Model :</h1>
					<input type="text" required {...register('model')} />

					<h1>Owner :</h1>
					<input type="text" required {...register('owner')} />

					<h1>Status :</h1>
					<select required list="status" {...register('status')}>
						<option value="Running">Running</option>
						<option value="Alerting">Alerting</option>
						<option value="Stopped">Stopped</option>

					</select>

					<h1>Health Level :</h1>
					<HealthLevel>
						<input type="range" min='0' max='100' defaultValue={'100'} required {...register('health_level')} />
						<h1>{watch('health_level', 100)}%</h1>
					</HealthLevel>

					<h1>Description :</h1>
					<input type="text" required {...register('description')} />
				</div>

				<button type='submit'>Enviar</button>
			</AssetForm>
		</VerticalBanner>
	);
}

const AssetForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	input, select, :not(input[type="rage"]){
		width: 100%;
	}


	input, select{
		outline: none;
		border:none;
		border-radius: 5px;
		padding-left: 5px;
		color: #3525EB;
	}

	div > input:not(:last-child), div >select {
		margin-bottom: 15px;
	}

	div > h1{
		margin-bottom: 1px;
	}

	button {
		margin-top: 25px;
		width: 100px;
		height: 30px;
		outline: none;
		border: none;
		border-radius: 5px;

		color: #3525EB;
	}

`;
const HealthLevel = styled.div`
	display: flex;
`;

const UploadElement = styled.div`
	width: 120px;
	height: 120px;
	
	position: relative;

	input[type='file']{
		visibility: hidden;
	}


`;
const UploadLabel = styled.label`
	background-color: white;
	background-size: cover;

	position: absolute;
	top:0;
	bottom:0;
	left: 0;
	right: 0;

	border-radius: 50%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;

	color:#3525EB;

`;
