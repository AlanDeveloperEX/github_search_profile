import React, { useEffect, useState } from 'react'
import { UserProps } from '../../models/users'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import Controls from '../../components/global/Controls'
import GridCards from '../../components/layout/GridCards'
import CardItem from '../../components/layout/CardItem'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../../components/layout/Modal'
import { RiCloseCircleFill } from 'react-icons/ri'
import * as S from './styles'
import Search from './components/Search/Search'
import ModalDetails from './components/ModalDetails'
import DefaultProfile from './../../assets/profile.jpg'

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

	return (
		<S.Container>
			<S.H1>Busque pelo seu usuário:</S.H1>
			<Search loadUser={loadUser} />

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
											<S.ModalShape>
												<motion.div layoutId={selectedId}>
													<ModalDetails data={item} />
													<RiCloseCircleFill
														style={{
															position: 'absolute',
															top: '1rem',
															right: '1rem',
															cursor: 'pointer',
															fontSize: '30px',
														}}
														onClick={() => setSelectedId(null)}
													/>
												</motion.div>
											</S.ModalShape>
										</Modal>
									))}
							</>
						)}
					</AnimatePresence>
				</>
			)}
			{!isLoading && dataUsers && dataUsers.length === 0 && (
				<CardItem avatar_url={DefaultProfile} login={'Ninguém'} />
			)}
		</S.Container>
	)
}

export default Landing
