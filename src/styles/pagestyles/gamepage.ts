import styled from 'styled-components'

export const GameWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

`
export const DoorsWrapper = styled.div`

   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;

`
export const ButtonsWrapper = styled.div`

   display: flex;
   flex-wrap: wrap;
   margin-top: 3rem;

   button{
      background-color: #c0392c;
      color: #fff;
      font-size: 2rem;
      border: none;
      padding: 10px;
      border-radius:5px;
   }

`
