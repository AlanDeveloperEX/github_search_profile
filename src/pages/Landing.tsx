import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { UsersProps } from '../models/users'
import { api } from '../services/api'

const Container = styled.div`
	${tw`font-mono text-blue-700 flex h-screen w-100 items-center flex-col justify-center`}
`

const Landing: React.FC = () => {
	const [dataUsers, setDataUsers] = useState<any>([])
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const loadUser = async function (userName: string) {
		setDataUsers([])
		setIsLoading(true)
		const queryString: any = 'users?q=' + encodeURIComponent(userName)

		try {
			const { data } = await api.get('search/' + queryString)

			if (data.total_count > 0 || data.incomplete_results) {
				window.alert('Temos resultados')

				// const { avatar_url, login, location, followers, following } = data

				// const userData: UserProps = {
				// 	avatar_url,
				// 	login,
				// 	location,
				// 	followers,
				// 	following,
				// }

				setDataUsers(data)
			} else {
				window.alert('Usuário não encontrado, tente novamente')
				// toast.error(
				//   "Usuário não encontrado, tente novamente",
				//   {
				//     position: "top-right",
				//   }
				// );
			}
		} catch (err) {
			window.alert('Erro na pesquisa, favor, tentar novamente')

			// toast.error(
			//   "Erro na pesquisa, favor, tentar novamente",
			//   {
			//     position: "top-right",
			//   }
			// );
		} finally {
			setIsLoading(false)
			setError(false)
		}
	}

	console.log(dataUsers)

	useEffect(() => {
		loadUser('AlanDeveloper')
	}, [])

	return (
		<Container>
			<h1>Hello World</h1>
			<span>React, TypeScript, Styled-Components + TailwindCSS - all up now</span>
			{dataUsers &&
				dataUsers.total_count > 0 &&
				dataUsers.items.map((user: any) => <p>{user.login}</p>)}
		</Container>
	)
}

export default Landing
