/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react'

import * as S from './styles'

type ModalProps = {
	children?: React.ReactNode
	isOpen?: boolean
	element?: Element
	className?: string
}

const Modal = ({ children }: ModalProps): JSX.Element => {
	return <S.Overlay>{children}</S.Overlay>
}

export default Modal
