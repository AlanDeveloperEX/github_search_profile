import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { UsersProps, UserProps } from '../models/users'
import { api } from '../services/api'
import { toast } from 'react-toastify'

const Container = styled.div`
	${tw`font-mono text-blue-700 flex h-screen w-100 items-center flex-col justify-center`}
`

const Landing: React.FC = () => {
	const [dataUsers, setDataUsers] = useState<any>([])
	const [isLoading, setIsLoading] = useState(false)

	const loadUser = async function (userName: string) {
		setDataUsers([])
		setIsLoading(true)
		const queryString: any = 'users?q=' + encodeURIComponent(userName)

		try {
			const { data } = await api.get('search/' + queryString)

			if (data.total_count > 0 || data.incomplete_results) {
				// const { avatar_url, login, location, followers, following } = data

				// const userData: UserProps = {
				// 	avatar_url,
				// 	login,
				// 	location,
				// 	followers,
				// 	following,
				// }

				setDataUsers(data.items)
			} else {
				toast.error('Usuário não encontrado, tente novamente', {
					position: 'top-right',
				})
			}
		} catch (err) {
			toast.error('Erro na pesquisa, favor, tentar novamente', {
				position: 'top-right',
			})
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		loadUser('AlanDeveloper')
	}, [])

	return (
		<Container>
			<h1>Hello World</h1>
			<span>React, TypeScript, Styled-Components + TailwindCSS - all up now</span>

			{isLoading ? (
				<>
					<p>Loading</p>
				</>
			) : (
				<>
					{dataUsers &&
						dataUsers.length > 0 &&
						dataUsers.map((user: UserProps, key: number) => <p key={key}>{user.login}</p>)}
				</>
			)}
		</Container>
	)
}

export default Landing
