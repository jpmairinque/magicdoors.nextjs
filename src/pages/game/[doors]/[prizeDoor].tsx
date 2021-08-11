import { useEffect, useState } from "react";
import Door from "../../../components/Door/Door";
import createDoors from "../../../helpers/doors";
import * as S from "../../../styles/pagestyles/gamepage";
import Link from "next/link"
import {useRouter} from "next/router"

const Game = () => {

  const router = useRouter()
  const [doorArr, setDoorArr] = useState([]);

  useEffect(()=>{
    const doors = +router.query.doors
    const prizeDoor = +router.query.prizeDoor
    setDoorArr(createDoors(doors, prizeDoor))
  },[router.query])
  
  

  const renderDoors = () => {
    return doorArr.map((door, key) => {
      return <Door setDoorArr={setDoorArr} key={key} num={key} doorArr={doorArr} />;
    });
  };

  return (
      <S.GameWrapper>
        <S.DoorsWrapper>
            {renderDoors()}
        </S.DoorsWrapper>
        <S.ButtonsWrapper>
           <Link href="/" passHref>
             <button>Restart</button>
           </Link>
        </S.ButtonsWrapper>
      </S.GameWrapper>
      )
};

export default Game;
