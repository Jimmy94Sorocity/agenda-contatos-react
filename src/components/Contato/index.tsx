import { useDispatch } from "react-redux";
import { useState } from "react";
import * as S from "./styles";

import { excluir } from "../../store/reducers/contatos";
import ContatoClass from "../../models/Contato";

type Props = ContatoClass;

const Contato = ({ nome, telefone, email, id }: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);

  return (
    <S.CardContato>
      <S.Informacoes>
        <S.Avatar />
        <S.Nome>{nome}</S.Nome>
        <S.Telefone>{telefone}</S.Telefone>
        <S.Email>{email}</S.Email>
      </S.Informacoes>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarEExcluir onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarEExcluir>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>
              Editar contato
            </S.Botao>
            <S.BotaoCancelarEExcluir onClick={() => dispatch(excluir(id))}>
              Excluir contato
            </S.BotaoCancelarEExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.CardContato>
  );
};

export default Contato;
