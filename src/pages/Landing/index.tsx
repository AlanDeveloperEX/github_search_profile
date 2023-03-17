import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'
import { UserProps } from '../../models/users'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import Controls from '../../components/global/Controls'
import GridCards from '../../components/layout/GridCards'
import CardItem from '../../components/layout/CardItem'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../../components/layout/Modal'

const Container = styled.div`
	${tw`font-mono text-blue-700 flex w-100 items-center flex-col justify-center p-3`}

	max-width: 1280px;
	margin: 0 auto;
`

const H1 = styled.h1`
	${tw`p-4 my-4 border-l-4 border-gray-300 bg-gray-50`}
	${({ theme }) => css`
		background: #262728;
		color: #fff;
		text-align: center;
		border-radius: 8px;
	`}
`

const Landing: React.FC = () => {
	const [dataUsers, setDataUsers] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [selectedId, setSelectedId] = useState<string | null>(null)

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
			<H1>Busque pelo seu usuário:</H1>
			<Controls.Input className='max-50' />

			{isLoading ? (
				<>
					<p>Loading</p>
				</>
			) : (
				<>
					<GridCards>
						{dataUsers &&
							dataUsers.length > 0 &&
							dataUsers.map((item: UserProps, key: number) => (
								<div key={key}>
									<motion.div
										layoutId={item.login}
										onClick={() => {
											setSelectedId(item.login)
										}}
									>
										<CardItem
											key={key}
											avatar_url={item.avatar_url}
											login={item.login}
											followers={item.followers}
											following={item.following}
										/>
									</motion.div>
								</div>
							))}
					</GridCards>
					<AnimatePresence>
						{selectedId && (
							<>
								{dataUsers
									.filter((item: UserProps) => item.login === selectedId)
									.map((item: any, key: number) => (
										<Modal key={key}>
											<motion.div layoutId={selectedId}>
												<motion.h5>{item.login}</motion.h5>
												<motion.button onClick={() => setSelectedId(null)} />
											</motion.div>
										</Modal>
									))}
							</>
						)}
					</AnimatePresence>
				</>
			)}
		</Container>
	)
}

export default Landing
