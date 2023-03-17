import React from 'react'
import * as S from './styles'

type InputProps = {
	type?: string
	className?: string
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
	return <S.Input {...rest} />
}

export default Input
