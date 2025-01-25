import { configureStore } from "@reduxjs/toolkit";
import burgerMenureducer from "./burgerMenu/burgerMenuSlice";

export const store = configureStore({
  reducer: {
    isOpen: burgerMenureducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
