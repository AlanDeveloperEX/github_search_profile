import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'

export const ModalTitle = styled.h2`
	${tw`p-4 my-4 border-l-4 border-gray-300 bg-gray-50`}
	${({ theme }) => css`
		background: #262728;
		color: #fff;
		text-align: center;
		border-radius: 8px;
	`}
`

export const ModalShape = styled.div`
	${tw`p-4 my-4 border-l-4 border-gray-300 bg-gray-50`}
	${({ theme }) => css`
		max-width: 80vh;
		background-color: #fff;
		width: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		position: relative;
	`}
`

export const ContainerDetais = styled.div`
	${tw``}

	display: flex;
	flex-direction: column;

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

export const InfosStyled = styled.h3`
	${tw``}
	text-align: center;
	font-size: 1rem;
	@media (max-width: 820px) {
	}
`
