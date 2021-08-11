import styled from 'styled-components'

export const NumberWrapper = styled.section`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: black;

span{
    font-size: 1.2rem;
}
p{
    font-size:5rem;
}


`
export const ButtonsWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 80%;

button{
    padding: 1rem;
    border: none;
    background-color: #fff2b;
    color: black;
    font-size: 1rem;
    border-radius: 10px;
    transition: 0.2s;
    cursor: pointer;

    &:hover{
        background-color: black;
        color: white;

    }

    &:disabled{
        cursor: not-allowed;
    
    }
}


`