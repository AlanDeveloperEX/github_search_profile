import React from 'react'
import * as S from './styles'

const GridCards: React.FC = ({ children, ...rest }) => {
	return <S.GridContainer {...rest}>{children}</S.GridContainer>
}

export default GridCards
