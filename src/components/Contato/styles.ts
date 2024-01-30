import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Botao } from "../../styles";

export const CardContato = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 40px;
  border-radius: 16px;
`;

export const Informacoes = styled.div`
  display: grid;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: none;
  margin-bottom: 40px;
  background-color: #747d8c;
`;

export const Nome = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  border: none;
  background-color: transparent;
`;

export const Telefone = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  border: none;
  background-color: transparent;
`;

export const Email = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  border: none;
  background-color: transparent;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  text-align: end;
`;

export const BotaoCancelarEExcluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
`;
