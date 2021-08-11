import React from 'react'
import * as S from './styles'

interface INumberInput{
    text: string
    value: number
    onChange: (newValue: number) => void
}

const NumberInput = (props:INumberInput) => {

    const inc = () => {
    props.onChange(props.value+1)
    }
    const dec = () => {
    props.onChange(props.value-1)
    }
    

    return (
      <S.NumberWrapper>
          <span>{props.text}</span>
          <p>{props.value}</p>
          <S.ButtonsWrapper>
              <button disabled={props.value==0} onClick={dec}>-</button>
              <button onClick={inc}>+</button>
          </S.ButtonsWrapper>
      </S.NumberWrapper>
    )
}

export default NumberInput
