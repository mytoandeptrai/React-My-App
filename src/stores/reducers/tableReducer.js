import { DECREMENT_ACTION, INCREMENT_ACTION } from "../actions/counterActions";
import {
   SET_DATA_LIST,
   SET_EDIT_INFO,
   SET_ERROR,
   SET_FILTER,
   SET_LOADING,
   SET_PAGINATION,
} from "../actions/tableActions";

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

const tableReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_DATA_LIST:
         return {
            ...state,
            dataList: action.payload,
         };
      case SET_EDIT_INFO:
         return {
            ...state,
            editInfoData: action.payload,
         };
      case SET_LOADING:
         return {
            ...state,
            isLoading: action.payload,
         };
      case SET_FILTER:
         return {
            ...state,
            filters: action.payload,
         };
      case SET_PAGINATION:
         return {
            ...state,
            pagination: action.payload,
         };
      case SET_ERROR:
         return {
            ...state,
            error: action.payload,
         };
      default:
         return state;
   }
};

export default tableReducer;
