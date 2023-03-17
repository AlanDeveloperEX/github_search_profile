import React from 'react'
import { UserProps } from '../../../models/users'
import * as S from './styles'

const CardItem: React.FC<UserProps> = (props) => {
	const { avatar_url, login } = props

	return (
		<S.CardStyled>
			<S.ImgStyled src={avatar_url} />
			<S.TitleStyled>{login}</S.TitleStyled>
		</S.CardStyled>
	)
}

export default CardItem
