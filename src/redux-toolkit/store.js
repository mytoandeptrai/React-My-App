import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import tableReducer from "./slice/tableSlice";

export const store = configureStore({
   reducer: {
      counterState: counterReducer,
      tableState: tableReducer,
   },
});
