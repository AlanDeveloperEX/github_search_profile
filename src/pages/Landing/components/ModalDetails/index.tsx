/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react'
import { UserProps } from '../../../../models/users'

import * as S from './styles'

type ModalDetailsProps = {
	data: UserProps
}

const ModalDetails: React.FC<ModalDetailsProps> = ({ data }) => {
	return (
		<div>
			<S.ModalTitle>{data.login}</S.ModalTitle>
		</div>
	)
}

export default ModalDetails
