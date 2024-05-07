import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import queryString from "query-string";

export const getTableApiReduxTookit = createAsyncThunk(
   "tableSlice/getTableApiReduxToolkit",
   async (filters, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
         const url = `https://api.slingacademy.com/v1/sample-data/users?${queryString.stringify(
            filters
         )}`;

         const response = await axios.get(url);
         const data = response.data;

         return data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

const initialState = {
   isLoading: false,
   dataList: [],
   editInfoData: null,
   pagination: {
      total_users: 100,
      offset: 1,
      limit: 10,
   },
   filters: {
      offset: 1,
      limit: 5,
   },
   isError: false,
};

export const tableSlice = createSlice({
   name: "tableSlice",
   initialState: initialState,
   reducers: {
      setDataList: (state, action) => {
         state.dataList = action.payload;
      },
      setIsLoading: (state, action) => {
         state.isLoading = action.payload;
      },
      setEditInfo: (state, action) => {
         state.editInfoData = action.payload;
      },
      setFilter: (state, action) => {
         state.filters = action.payload;
      },
      setPagination: (state, action) => {
         state.pagination = action.payload;
      },
      setError: (state, action) => {
         state.isError = action.payload;
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(getTableApiReduxTookit.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getTableApiReduxTookit.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.dataList = action.payload?.users ?? [];
            state.pagination = {
               limit: action.payload?.limit,
               offset: action.payload?.offset,
               total_users: action.payload?.total_users,
            };
         })
         .addCase(getTableApiReduxTookit.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.dataList = [];
            state.pagination = {
               total_users: 100,
               offset: 1,
               limit: 10,
            };
         });
   },
});

export const { setDataList, setEditInfo, setError, setFilter, setIsLoading } =
   tableSlice.actions;

export default tableSlice.reducer;
