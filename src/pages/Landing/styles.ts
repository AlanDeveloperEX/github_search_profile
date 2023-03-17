import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
	${tw`font-mono text-blue-700 flex w-100 items-center flex-col justify-center p-3`}

	max-width: 1280px;
	margin: 0 auto;
`

export const H1 = styled.h1`
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
