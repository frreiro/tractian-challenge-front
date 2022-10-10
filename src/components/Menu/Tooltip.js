import React, { useState } from 'react';
import styled from 'styled-components';

export default function Tooltip(props) {
	let timeout;
	const [active, setActive] = useState(false);

	function showTip() {
		timeout = setTimeout(() => {
			setActive(true);
		}, props.delay || 400);
	};

	function hideTip() {
		clearInterval(timeout);
		setActive(false);
	};

	return (
		<TooltopContainer
			onClick={showTip}
			onKeyUp={(e) => e.key === 'Enter' ? setTimeout(hideTip, 500) : ''}
		>
			{props.children}
			{active && (
				<div className={'Tooltip-Tip right'}>
					{/* Content */}
					{props.content}
				</div>
			)}
		</TooltopContainer>
	);
};

const TooltopContainer = styled.div`
  display: inline-block;
  position: relative;

  --tooltip-text-color: white;
  --tooltip-background-color: #fff;
  --tooltip-margin: 30px;
  --tooltip-arrow-size: 6px;


.Tooltip-Tip {
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: var(--tooltip-text-color);
  background: var(--tooltip-background-color);
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;
}

/* CSS border triangles */
.Tooltip-Tip::before {
  content: " ";
  left: 50%;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-width: var(--tooltip-arrow-size);
  margin-left: calc(var(--tooltip-arrow-size) * -1);
}

/* Absolute positioning */
.Tooltip-Tip.right {
  left: calc(100% + var(--tooltip-margin));
  top: 0;
  transform: translateX(0) translateY(-40%);
}
/* CSS border triangles */
.Tooltip-Tip.right::before {
  left: calc(var(--tooltip-arrow-size) * -1);
  bottom: 15%;
  transform: translateX(0) translateY(-50%);
  border-right-color: var(--tooltip-background-color);
}

`;
