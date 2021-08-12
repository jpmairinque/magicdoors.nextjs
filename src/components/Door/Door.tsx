import * as S from "./styles";
import Gift from "../Gift/Gift";

const Door = ({ setDoorArr, doorArr, num }) => {
    interface IDoor{
      isSelected: boolean
      isOpen: boolean
      gotGift: boolean
      number: number
    }

  const toggleSelect = () => {

    const newArr = doorArr.map((d:IDoor, key:number) => {
      if (d.number == num + 1) { 
        d.isSelected = !d.isSelected;
        return d;
      } else { 
        d.isSelected = false
        return d;
      }
    });

    setDoorArr(newArr);
  };

  const toggleOpen = (e) => {

    e.stopPropagation();

    const newArr = doorArr.map((d:IDoor, key:number) => {
      if (d.number == num + 1) {
        d.isSelected = false;
        d.isOpen = true;
        return d;
      } else {
        return d;
      }
    });

    setDoorArr(newArr);
  };

  const renderDoor = () => {
    return (
      <S.Door>
        <S.DoorNumber>{doorArr[num].number}</S.DoorNumber>
        <S.DoorHandle
          onClick={toggleOpen}
          selected={doorArr[num].isSelected}
        ></S.DoorHandle>
      </S.Door>
    );
  };

  return (
    <S.DoorArea open={doorArr[num].isOpen} onClick={toggleSelect}>
      <S.DoorStructure selected={doorArr[num].isSelected}>
        {!doorArr[num].isOpen ?
           renderDoor() :
           doorArr[num].gotGift ? <Gift/> : ''}          
      </S.DoorStructure>
      <S.DoorFloor></S.DoorFloor>
    </S.DoorArea>
  );
};

export default Door;
