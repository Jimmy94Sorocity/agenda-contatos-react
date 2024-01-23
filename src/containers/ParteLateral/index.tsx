import Buttons from "../../components/Buttons";

import * as S from "./styles";

const ParteLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar Contato" />
      <S.EstiloBotao>
        <Buttons />
      </S.EstiloBotao>
    </div>
  </S.Aside>
);

export default ParteLateral;
