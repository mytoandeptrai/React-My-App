import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserById = createAsyncThunk(
   "counterSlice/fetchUserById",
   async () => {
      try {
         const response = await axios.get("http://localhost:5000/users");
         return response.data;
      } catch (error) {}
   }
);

const initialState = {
   counter: 0,
   isBoolean: false,
};

export const counterSlice = createSlice({
   name: "counterSlice",
   initialState: initialState,
   reducers: {
      increment: (state, action) => {
         state.counter = state.counter + action.payload;
      },
      setBoolean: (state, action) => {
         state.isBoolean = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchUserById.fulfilled, (state, action) => {
         state.isBoolean = false;
         state.counter = state.counter + 1;
      });
      builder.addCase(fetchUserById.pending, (state, action) => {
         state.isBoolean = true;
      });
      builder.addCase(fetchUserById.rejected, (state, action) => {
         state.isBoolean = false;
      });
   },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
