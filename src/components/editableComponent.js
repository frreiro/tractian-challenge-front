import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb
} from 'react-circular-input';

export default function EditableComponent({ children, submitFuncion }) {
	const [canEdit, setCanEdit] = useState(false);
	const [value, setValue] = useState(0);

	function onSubmit(e) {
		submitFuncion(getPercentage());
		setCanEdit(false);
	}

	function gapValue(value) {
		return Math.round(value * 10) / 10;
	}

	function getPercentage() {
		return Math.round(value * 100);
	}

	return (
		<EditableContainer canEdit={canEdit} onClick={() => canEdit ? ' ' : setCanEdit(true)}>
			{canEdit ?
				<CircularInput radius={70} value={gapValue(value)}
					onChange={(value) => setValue(gapValue(value))}
					onChangeEnd={onSubmit}

				>
					<CircularTrack strokeWidth={4} stroke="#eee" />
					<CircularProgress />
					<CircularThumb />
					<text x={70} y={70}
						textAnchor="middle"
						dy="0.3em"
						fontWeight="500"
						fontSize={25}
						textAlign="center"
						fill={'white'}
						fontFamily={'Poppins'}>
						{getPercentage()}%
					</text>
				</CircularInput>
				: children
			}

		</EditableContainer >
	);
}

const EditableContainer = styled.div`

`;
