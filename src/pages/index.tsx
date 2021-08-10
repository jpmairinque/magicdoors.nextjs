import Card from "../components/Card/Card";
import * as S from "../styles/pagestyles/formpage";
import NumberInput from "../components/NumberInput/NumberInput";
import Link from "next/link";
import { useState } from "react";

export default function Form() {
  const [doorAmnt, setDoorAmnt] = useState(3);
  const [prizeDoor, setPrizeDoor] = useState(1);

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
          <Link href={`/game/${doorAmnt}/${prizeDoor}`}>
            <h2>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </S.FormWrapper>
  );
}
