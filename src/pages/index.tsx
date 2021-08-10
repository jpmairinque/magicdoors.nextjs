import Card from "../components/Card/Card";
import * as S from "../styles/pagestyles/formpage";
import Link from 'next/link'

export default function Form() {
  return (
    <S.FormWrapper>
      <div>
        <Card bgcolor="#c0392c" >
          <h1>Magic Doors</h1>
        </Card>
        <Card />
      </div>
      <div>
        <Card />
        <Card bgcolor="#28a085">
          <Link href={`/game/4/2`}>
            <h2>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </S.FormWrapper>
  );
}
