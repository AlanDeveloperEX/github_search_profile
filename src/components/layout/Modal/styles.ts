import styled from 'styled-components'

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100vw;
	min-height: 100vh;

	z-index: 999;

	transition: background-color 0.2s, opacity 0.2s, visibility 0.4s;

	overflow-y: auto;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgba(0, 0, 0, 0.6);
	opacity: 1;
`
