import { configureStore } from "@reduxjs/toolkit";
import appBarNameReducer from "./features/headerTextSlice";
export default configureStore({
  reducer: {
    appBarName: appBarNameReducer,
  },
});
