import React from 'react'
import * as S from './styles'

interface INumberInput{
    text: string
    value: number
    onChange: (newValue: number) => void
}


const NumberInput = (props:INumberInput) => {
    return (
      <S.NumberWrapper>
          <span>{props.text}</span>
          <p>{props.value}</p>
          <S.ButtonsWrapper>
              <button>-</button>
              <button>+</button>
          </S.ButtonsWrapper>
      </S.NumberWrapper>
    )
}

export default NumberInput
