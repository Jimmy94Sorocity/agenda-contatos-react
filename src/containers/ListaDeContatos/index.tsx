import { useSelector } from "react-redux";

import Contato from "../../components/Contato";
import { Container } from "./styles";
import { RootReducer } from "../../store";

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { input } = useSelector((state: RootReducer) => state.filtro);

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(input.toLowerCase()) >= 0
    );
  };

  return (
    <Container>
      <p>Busca encontrada: {input}</p>
      <ul>
        {filtraContatos().map((c) => (
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
