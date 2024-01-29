import { useSelector } from "react-redux";

import Contato from "../../components/Contato";
import { MainContainer, Mensagem } from "../../styles/index";
import { RootReducer } from "../../store";

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { input } = useSelector((state: RootReducer) => state.filtro);

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(input.toLowerCase()) >= 0
    );
  };

  const contatos = filtraContatos();

  return (
    <MainContainer>
      <Mensagem>
        {contatos.length} Contato(s) encontrado(s): {input}
      </Mensagem>
      <ul>
        {contatos.map((c) => (
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
    </MainContainer>
  );
};

export default ListaDeContatos;
