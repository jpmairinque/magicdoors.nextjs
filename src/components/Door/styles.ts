import styled from "styled-components";
import v from "../../styles/variables";

export const DoorArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${v.doorwidth};
  height: ${v.doorheight};
  margin: 5px;
  

  pointer-events: ${p => p.open ? 'none' : 'all'}
`;
export const DoorStructure = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  width: 90%;

  border-left: 5px solid ${p=>(p.selected ? 'yellow' : 'brown')};
  border-top: 5px solid ${p=>(p.selected ? 'yellow' : 'brown')};
  border-right: 5px solid ${p=>(p.selected ? 'yellow' : 'brown')};
   background-color: black;
`;
export const Door = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  background-color: chocolate;
  padding: 1rem;
`;
export const DoorNumber = styled.div`
  font-size: 3rem;
`;

export const DoorFloor = styled.div`
  height: 10px;
  width: 100%;
  background-color: #ddd;
`;
export const DoorHandle = styled.div`
  position: absolute;
  top: 135px;
  left: 30px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: ${p=>(p.selected ? 'yellow' : 'brown')};
`;


