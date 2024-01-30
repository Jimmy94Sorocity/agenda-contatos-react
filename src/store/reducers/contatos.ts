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
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ];
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const contatoJaExiste = state.itens.find(
        (contato) => contato.telefone === action.payload.telefone
      );

      if (contatoJaExiste) {
        alert("Já existe um contato com esse número");
      } else {
        const ultimoContato = state.itens[state.itens.length - 1];

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        };
        state.itens.push(contatoNovo);
      }
    }
  }
});

export const { excluir, editar, cadastrar } = constatosSlice.actions;

export default constatosSlice.reducer;
