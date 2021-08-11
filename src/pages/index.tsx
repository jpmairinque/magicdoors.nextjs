import Card from "../components/Card/Card";
import * as S from "../styles/pagestyles/formpage";
import NumberInput from "../components/NumberInput/NumberInput";
import {AiOutlineClose} from 'react-icons/ai'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Form() {

  const [errorMsg, setErrorMsg] = useState<string>("")
  const [validNum, setValidNum] = useState(false)
  const [doorAmnt, setDoorAmnt] = useState(3);
  const [prizeDoor, setPrizeDoor] = useState(1);

  useEffect(()=>{
    
    if(doorAmnt<prizeDoor){
      setErrorMsg("Prize door number can't be greater than the doors amount")
      setValidNum(false)
    } else {
      setErrorMsg("")
      setValidNum(true)
    }   

  },[prizeDoor,doorAmnt])


  return (
    <S.FormWrapper>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Magic Doors</h1>
        </Card>
        <Card>
          <NumberInput
            onChange={(newAmnt) => setDoorAmnt(newAmnt)}
            value={doorAmnt}
            text="How many doors?"
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            onChange={(newPrizeDoor) => setPrizeDoor(newPrizeDoor)}
            value={prizeDoor}
            text="Which is the prize door?"
          />
        </Card>
        <Card bgcolor="#28a085">
          {validNum ? <Link href={`/game/${doorAmnt}/${prizeDoor}`} passHref>
            <h2>Iniciar</h2>
          </Link> :  <h2><AiOutlineClose/></h2>}
        </Card>
      </div>
      <h2>{errorMsg ? errorMsg : "Good game! =)"}</h2>
    </S.FormWrapper>
  );
}
