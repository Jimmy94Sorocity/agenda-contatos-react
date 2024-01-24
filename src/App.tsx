import { Provider } from "react-redux";
import ListaDeContatos from "./containers/ListaDeContatos";
import ParteLateral from "./containers/ParteLateral";
import EstiloGlobal, { Container } from "./styles";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ParteLateral />
        <ListaDeContatos />
      </Container>
    </Provider>
  );
}

export default App;
