import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BotaoSalvar, MainContainer, Mensagem } from "../../styles/index";
import { Campo } from "../../styles/index";
import { Form } from "./styles";
import { cadastrar } from "../../store/reducers/contatos";

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState<number>(0);
  const [email, setEmail] = useState("");

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    dispatch(
      cadastrar({
        nome,
        telefone,
        email
      })
    );
    navigate("/");
  };

  return (
    <MainContainer>
      <Mensagem>Novo Contato</Mensagem>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
          required
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(parseInt(evento.target.value))}
          type="number"
          placeholder="Número do telefone"
          required
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="E-mail do contato"
          required
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  );
};

export default Formulario;
