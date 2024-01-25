import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltroState = {
  input: string;
};

const initialState: FiltroState = {
  input: ""
};

const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    alteraInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    }
  }
});

export const { alteraInput } = filtroSlice.actions;

export default filtroSlice.reducer;
