import styled from 'styled-components'
import tw from 'tailwind.macro'

export const CardStyled = styled.div`
	${tw`font-mono`}

	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	overflow: hidden;
	background-color: #262728;
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
		width: 120px;
		height: 120px;
	}
`

export const TitleStyled = styled.h2`
	${tw``}

	font-size: 1rem;
	@media (max-width: 820px) {
	}
`
