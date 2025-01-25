import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MenuState {
  isOpen: boolean;
}

const initialState: MenuState = {
  isOpen: false,
};

const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { open, close } = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;
