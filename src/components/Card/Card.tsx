import React from 'react'
import * as S from './styles'

interface ICardProps{
    bgcolor?: string
    children?: any
}


const Card = (props: ICardProps) => {
    return (
       <S.CardWrapper bgcolor={props.bgcolor}>
           {props.children}
        
       </S.CardWrapper>
    )
}

export default Card
