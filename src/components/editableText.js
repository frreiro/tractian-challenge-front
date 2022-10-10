import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styled from 'styled-components';

export default function EditableText({ children, submitFuncion }) {
	const [canEdit, setCanEdit] = useState(false);
	const [text, setText] = useState('');

	function onSubmit(e) {
		e.preventDefault();
		submitFuncion(text);
	}
	return (
		<EditableContainer type={children.type} canEdit={canEdit} onClick={() => canEdit ? ' ' : setCanEdit(true)}>
			{canEdit ?
				<form onSubmit={onSubmit}>
					<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
				</form>
				: children
			}
			<EditOutlined className='edt' style={{ color: '#fff', fontSize: 15, marginLeft: 10, opacity: 0.4 }} />
			<CloseOutlined className='noEdt' onClick={() => setCanEdit(false)} style={{ color: '#fff', fontSize: 20, marginLeft: 10, opacity: 0.4 }} />

		</EditableContainer>
	);
}

const EditableContainer = styled.div`
	display: flex;

	${props => props.type}:hover + .edt{
		display: block;
		
	}

	form {
		input{
			width: 100%;
		}
	}


	.noEdt{
		display: ${props => props.canEdit ? 'block' : 'none'};
	}

	.edt{
		display: none;
	}

`;
