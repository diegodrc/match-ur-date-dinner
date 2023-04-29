import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setCode } = codeSlice.actions;
export const selectCode = (state) => state.code.value;
export default codeSlice.reducer;
