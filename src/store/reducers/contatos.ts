import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

const constatosSlice = createSlice({
  name: "contatos",
  initialState: [
    new Contato("Denise", 15998547458, "teste@teste.com", 1),
    new Contato("Paulo", 15999547458, "tese@teste.com", 2),
    new Contato("Ronaldo", 15998547658, "test@teste.com", 3)
  ],
  reducers: {
    excluir: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload);
    }
  }
});

export const { excluir } = constatosSlice.actions;

export default constatosSlice.reducer;
