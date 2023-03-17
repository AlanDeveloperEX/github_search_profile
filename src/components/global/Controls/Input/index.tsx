import React from 'react'
import * as S from './styles'

type InputProps = {
	type?: string
	className?: string
	placeholder?: string
	onChange?: any
	onKeyDown?: any
}

const Input: React.FC<InputProps> = ({ onChange, onKeyDown, placeholder, ...rest }) => {
	return <S.Input placeholder={placeholder} onKeyDown={onKeyDown} onChange={onChange} {...rest} />
}

export default Input
