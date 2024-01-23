import ListaDeContatos from "./containers/ListaDeContatos";
import ParteLateral from "./containers/ParteLateral";
import EstiloGlobal, { Container } from "./styles";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <ParteLateral />
        <ListaDeContatos />
      </Container>
    </>
  );
}

export default App;
