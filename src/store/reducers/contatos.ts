import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: "Denise",
      telefone: 15998547458,
      email: "teste@teste.com"
    },
    {
      id: 2,
      nome: "Paulo",
      telefone: 15999547458,
      email: "tese@teste.com"
    },
    {
      id: 3,
      nome: "Ronaldo",
      telefone: 15998547658,
      email: "test@teste.com"
    }
  ]
};

const constatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    excluir: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    }
  }
});

export const { excluir } = constatosSlice.actions;

export default constatosSlice.reducer;
