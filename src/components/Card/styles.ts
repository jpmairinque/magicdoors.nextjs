import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 300px;
    height: 300px;
    color: #fff;
    background-color: ${(p)=>p.bgcolor ?? "#fff"};
    margin:  3px;
    font-size: 2rem;
    padding: 20px;

    h1{
       display: flex;
       justify-content: center;
       align-items: center;
    }
    h2{
       flex: 1;
       margin: 0;
       display: flex;
       justify-content: center;
       align-items: center;
       cursor: pointer;
    }



`