import { useSelector } from "react-redux";

import Contato from "../../components/Contato";
import { Container } from "./styles";
import { RootReducer } from "../../store";

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state);

  return (
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
};

export default ListaDeContatos;
