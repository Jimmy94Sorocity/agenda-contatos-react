import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Buttons from "../../components/Buttons";

import * as S from "./styles";
import { RootReducer } from "../../store";
import { alteraInput } from "../../store/reducers/filtro";
import { Botao, Campo } from "../../styles/index";

type Props = {
  botaoInicial: boolean;
};

const ParteLateral = ({ botaoInicial }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { input } = useSelector((state: RootReducer) => state.filtro);

  return (
    <S.Aside>
      <div>
        {botaoInicial ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar Contato"
              value={input}
              onChange={(evento) => dispatch(alteraInput(evento.target.value))}
            />
            <S.EstiloBotao>
              <Buttons />
            </S.EstiloBotao>
          </>
        ) : (
          <Botao onClick={() => navigate("/")}>Voltar para Contatos</Botao>
        )}
      </div>
    </S.Aside>
  );
};

export default ParteLateral;
