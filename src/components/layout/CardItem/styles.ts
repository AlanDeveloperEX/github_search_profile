import styled from 'styled-components'
import tw from 'tailwind.macro'

export const CardStyled = styled.div`
	${tw`font-mono`}

	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	overflow: hidden;
	background-color: #2c3441;
	border-radius: 8px;
	padding: 0.7rem;

	@media (max-width: 820px) {
	}
`

export const ImgStyled = styled.img`
	${tw``}

	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin: 0 auto;
	overflow: hidden;

	@media (max-width: 820px) {
	}
`
