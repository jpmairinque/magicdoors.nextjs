import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Door from "../../../components/Door/Door";
import createDoors from "../../../helpers/doors";
import * as S from "../../../styles/pagestyles/gamepage";

const Game = () => {
  const router = useRouter();

  const [isValid, setIsValid] = useState(true);
  const [doorArr, setDoorArr] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors;
    const prizeDoor = +router.query.prizeDoor;
    setDoorArr(createDoors(doors, prizeDoor));
    if (doors < prizeDoor || prizeDoor <= 0 || prizeDoor <= 0) {
      setIsValid(false);
    }
  }, [router.query]);

  const renderDoors = () => {
    return doorArr.map((door, key) => {
      return (
        <Door setDoorArr={setDoorArr} key={key} num={key} doorArr={doorArr} />
      );
    });
  };

  return (
    <S.GameWrapper>
      <S.DoorsWrapper>
        {isValid ? renderDoors() : "Invalide entries =("}
      </S.DoorsWrapper>
      <S.ButtonsWrapper>
        <Link href="/" passHref>
          <button style={{ cursor: "pointer" }}>Restart</button>
        </Link>
      </S.ButtonsWrapper>
    </S.GameWrapper>
  );
};

export default Game;
