import { configureStore } from "@reduxjs/toolkit";

import stepReducer from "./features/step/stepSlice";
import codeReducer from "./features/code/codeSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    step: stepReducer,
    code: codeReducer,
    user: userReducer,
  },
});
