import { useState } from 'react';
import styled from 'styled-components';

export default function TooltipElement({ formSubmit, type }) {
	const [inputText, setInputText] = useState(null);

	function submitForm(e) {
		e.preventDefault();
		formSubmit(e, inputText);
	}

	return (
		<Container>
			<form onSubmit={submitForm}>
				<label>Create {type}</label>
				<input onChange={(e) => setInputText(e.target.value)} />
			</form>
		</Container>
	);
}

export const Container = styled.div`

	label{
		font-weight: 500;
		font-size: 20px;
		color: #3525EB;
		margin-top: 10px;

	}

	input {
		border-radius: 5px;
		outline: none;
		border: none;
		margin: 10px;
		border:  1px solid #3525EB;
		color: #3525EB;
		padding: 5px;
	}

	form{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
