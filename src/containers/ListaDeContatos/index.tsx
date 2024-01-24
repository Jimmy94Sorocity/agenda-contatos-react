import { useSelector } from "react-redux";

import Contato from "../../components/Contato";
import { Container } from "./styles";
import { RootReducer } from "../../store";

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);

  return (
    <Container>
      <ul>
        {itens.map((c) => (
          <li key={c.telefone}>
            <Contato
              id={c.id}
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
            />
          </li>
        ))}
        ;
      </ul>
    </Container>
  );
};

export default ListaDeContatos;
