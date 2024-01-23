import * as S from "./styles";

const Contato = () => (
  <S.CardContato>
    <S.Informacoes>
      <S.Avatar />
      <S.Nome>Nome Contato</S.Nome>
      <S.Telefone>Telefone Contato</S.Telefone>
      <S.Email>Email Contato</S.Email>
    </S.Informacoes>
    <S.BarraAcoes>
      <S.Botao>Editar contato</S.Botao>
      <S.Botao>Excluir contato</S.Botao>
    </S.BarraAcoes>
  </S.CardContato>
);

export default Contato;
