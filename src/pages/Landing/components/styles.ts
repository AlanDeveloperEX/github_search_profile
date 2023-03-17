import styled from 'styled-components'
import tw from 'tailwind.macro'

export const ContainerSearch = styled.div`
	${tw``}

	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;

	button {
		background-color: transparent;
		border: none;
		margin-left: -44px;
		padding: 0 15px;
		cursor: pointer;
	}

	svg {
		font-size: 20px;
	}

	@media (max-width: 820px) {
	}
`
