import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { UserProps } from '../../../../models/users'
import { api } from '../../../../services/api'

import * as S from './styles'

type ModalDetailsProps = {
	data: UserProps
}

type UserProfileProps = {
	name: string
	bio: string
	avatar_url: string
	login: string
	location: string
	email: string
	public_repos: number
}

const ModalDetails: React.FC<ModalDetailsProps> = ({ data }) => {
	const [dataUser, setDataUser] = useState<UserProfileProps | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	const loadUser = async function (userName: string) {
		setIsLoading(true)
		const queryString: string = userName

		try {
			const { data } = await api.get('users/' + queryString)

			setDataUser(data)
		} catch (err) {
			toast.error('Erro na pesquisa, favor, tentar novamente', {
				position: 'top-right',
			})
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		setDataUser(null)
		if (data.login && data.login !== undefined) {
			loadUser(data.login)
		}
	}, [data.login])

	return (
		<>
			{isLoading ? (
				<>
					<p>Loading</p>
				</>
			) : (
				dataUser !== null && (
					<S.ContainerDetais>
						<S.ModalTitle>{dataUser.name}</S.ModalTitle>
						<S.ImgStyled src={dataUser.avatar_url} />
						<S.InfosStyled>{dataUser.location}</S.InfosStyled>
						<S.InfosStyled>{dataUser.email}</S.InfosStyled>
						<S.InfosStyled>Reposittories: {dataUser.public_repos}</S.InfosStyled>
						<S.InfosStyled>{dataUser.bio}</S.InfosStyled>
					</S.ContainerDetais>
				)
			)}
		</>
	)
}

export default ModalDetails
