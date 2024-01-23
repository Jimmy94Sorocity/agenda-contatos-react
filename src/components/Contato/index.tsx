import { useState } from "react";
import * as S from "./styles";

type Props = {
  nome: string;
  telefone: number;
  email: string;
};

const Contato = ({ nome, telefone, email }: Props) => {
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
            <S.BotaoCancelarEExcluir>Excluir contato</S.BotaoCancelarEExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.CardContato>
  );
};

export default Contato;
