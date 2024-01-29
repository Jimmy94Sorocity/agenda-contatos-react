import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { BotaoSalvar } from "../../styles/index";

import { excluir, editar } from "../../store/reducers/contatos";
import ContatoClass from "../../models/Contato";

type Props = ContatoClass;

const Contato = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [nome, setNomeEditando] = useState("");
  const [email, setEmailEditando] = useState("");
  const [telefone, setTelefoneEditando] = useState<number>(0);

  useEffect(() => {
    if (
      nomeOriginal.length > 0 &&
      emailOriginal.length > 0 &&
      telefoneOriginal > 0
    ) {
      setNomeEditando(nomeOriginal);
      setEmailEditando(emailOriginal);
      setTelefoneEditando(telefoneOriginal);
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal]);

  function cancelarEdicao() {
    setEstaEditando(false);
    setNomeEditando(nomeOriginal);
    setEmailEditando(emailOriginal);
    setTelefoneEditando(telefoneOriginal);
  }

  return (
    <S.CardContato>
      <S.Informacoes>
        <S.Avatar />
        <S.Nome
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNomeEditando(evento.target.value)}
        />
        <S.Telefone
          disabled={!estaEditando}
          value={telefone}
          onChange={(evento) =>
            setTelefoneEditando(parseInt(evento.target.value))
          }
        />
        <S.Email
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmailEditando(evento.target.value)}
        />
      </S.Informacoes>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    id
                  })
                );
                setEstaEditando(false);
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarEExcluir onClick={cancelarEdicao}>
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
