import { useDispatch, useSelector } from "react-redux";
import Buttons from "../../components/Buttons";

import * as S from "./styles";
import { RootReducer } from "../../store";
import { alteraInput } from "../../store/reducers/filtro";
import { Campo } from "../../styles/index";

const ParteLateral = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state: RootReducer) => state.filtro);

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar Contato"
          value={input}
          onChange={(evento) => dispatch(alteraInput(evento.target.value))}
        />
        <S.EstiloBotao>
          <Buttons />
        </S.EstiloBotao>
      </div>
    </S.Aside>
  );
};

export default ParteLateral;
