import React, { useState, KeyboardEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import Controls from '../../../components/global/Controls'

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
		<>
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
		</>
	)
}

export default Search
