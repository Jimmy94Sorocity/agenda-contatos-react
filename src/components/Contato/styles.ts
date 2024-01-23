import styled from "styled-components";

export const CardContato = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 40px;
  border-radius: 16px;
`;

export const Informacoes = styled.div`
  align-itens: center;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: #000;
  margin-bottom: 24px;
`;

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Telefone = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Email = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  text-align: end;
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
  right: 0;
`;