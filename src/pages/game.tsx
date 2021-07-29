import { useState } from "react";
import Door from "../components/Door/Door";
import createDoors from "../helpers/doors";
import * as S from "../styles/pagestyles/gamepage";

const game = () => {
  const [doorArr, setDoorArr] = useState(createDoors(10, 2));

  const renderDoors = () => {
    return doorArr.map((door, key) => {
      return <Door setDoorArr={setDoorArr} num={key} doorArr={doorArr} />;
    });
  };

  return (
      <S.GameWrapper>
        <S.DoorsWrapper>
            {renderDoors()}
        </S.DoorsWrapper>
        <S.ButtonsWrapper>
            
        </S.ButtonsWrapper>
      </S.GameWrapper>
      )
};

export default game;
