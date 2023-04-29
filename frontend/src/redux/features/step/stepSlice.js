import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "telaInicial",
};

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    changeStep: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeStep } = stepSlice.actions;
export const selectStep = (state) => state.step.value;
export default stepSlice.reducer;
