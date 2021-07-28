import * as S from "./styles";
import DoorModel from '../../model/door'

interface DoorProps{
  door: DoorModel
}

const Door = ({door}: DoorProps) => {
  return (
    <S.DoorArea>
      <S.DoorStructure selected={door.selected}>
        <S.Door>
          <S.DoorNumber>{door.number}</S.DoorNumber>
          <S.DoorHandle selected={door.selected}></S.DoorHandle>
        </S.Door>
      </S.DoorStructure>
      <S.DoorFloor></S.DoorFloor>
    </S.DoorArea>
  );
};

export default Door;
