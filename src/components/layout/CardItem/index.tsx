import React from 'react'
import { UserProps } from '../../../models/users'
import * as S from './styles'

const CardItem: React.FC<UserProps> = (props) => {
	const { avatar_url, login, followers, following } = props

	return (
		<S.CardStyled>
			<S.ImgStyled src={avatar_url} />
			<S.TitleStyled>{login}</S.TitleStyled>
			{/* <div>{followers}</div>
			<div>{following}</div> */}
		</S.CardStyled>
	)
}

export default CardItem
