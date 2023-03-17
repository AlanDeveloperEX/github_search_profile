import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Input = styled.input`
	${tw`font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
   block w-full py-2 max-w-full`}

	&:focus-visible {
		border-color: red;
	}

	&.max-50 {
		max-width: 50%;

		@media (max-width: 820px) {
			max-width: 98%;
		}
	}
`
