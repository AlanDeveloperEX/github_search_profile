import styled from 'styled-components'
import tw from 'tailwind.macro'

export const GridContainer = styled.div`
	${tw`font-mono mt-4`}

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-columns: repeat(3, minmax(100px, 1fr));
	gap: 20px;
	width: 100%;
	max-width: 980px;

	@media (max-width: 820px) {
		grid-template-columns: repeat(2, 1fr);
	}
`
