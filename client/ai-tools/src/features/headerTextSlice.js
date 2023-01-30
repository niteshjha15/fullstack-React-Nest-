import { createSlice } from "@reduxjs/toolkit";

export const headerTextSlice = createSlice({
  name: "Appbartext",
  initialState: {
    name: "Demo",
  },
  reducers: {
    updateName: (state, action) => {
      const text = action.payload;
      state.name = text;
    },
  },
});

// this is for dispatch
export const { updateName } = headerTextSlice.actions;

// this is for configureStore
export default headerTextSlice.reducer;
