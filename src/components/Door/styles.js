import styled from "styled-components";
import v from "../../styles/variables"

export const DoorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: chocolate;
    padding: 1rem;

    width: ${v.doorwidth};
    height: ${v.doorheight};

`
export const DoorNumber = styled.div`

    font-size: 3rem;
`