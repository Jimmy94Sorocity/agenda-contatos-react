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
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>
              Editar contato
            </S.Botao>
            <S.Botao>Excluir contato</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.CardContato>
  );
};

export default Contato;
