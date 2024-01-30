import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  isEven: false,
};

export const isEvenSlice = createSlice({
  name: "isEvenState",
  initialState: initialStateValues,
  reducers: {
    setIsEven: (state) => {
      state.isEven = true;
    },
    setIsOdd: (state) => {
      state.isEven = false;
    },
  },
});

export const { setIsEven, setIsOdd } = isEvenSlice.actions;

export default isEvenSlice.reducer;
