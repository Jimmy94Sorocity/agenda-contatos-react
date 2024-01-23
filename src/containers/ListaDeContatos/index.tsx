import Contato from "../../components/Contato";
import { Container } from "./styles";

const contatos = [
  {
    nome: "Denise",
    telefone: 15998547458,
    email: "teste@teste.com"
  },
  {
    nome: "Paulo",
    telefone: 15999547458,
    email: "tese@teste.com"
  },
  {
    nome: "Ronaldo",
    telefone: 15998547658,
    email: "test@teste.com"
  }
];

const ListaDeContatos = () => (
  <Container>
    <ul>
      {contatos.map((c) => (
        <li key={c.telefone}>
          <Contato nome={c.nome} telefone={c.telefone} email={c.email} />
        </li>
      ))}
      ;
    </ul>
  </Container>
);

export default ListaDeContatos;
