import React, { useState, KeyboardEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import Controls from '../../../components/global/Controls'
import * as S from './styles'

type SearchProps = {
	loadUser: (userName: string) => Promise<void>
}

const Search = ({ loadUser }: SearchProps) => {
	const [userName, setUserName] = useState('')

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			loadUser(userName)
		}
	}

	return (
		<S.ContainerSearch>
			<Controls.Input
				type='text'
				onChange={(e: any) => setUserName(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder='Digite o nome do usuário'
				className='max-50'
			/>
			<button onClick={() => loadUser(userName)}>
				<BsSearch />
			</button>
		</S.ContainerSearch>
	)
}

export default Search
