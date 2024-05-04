import axios from "axios";
import queryString from "query-string";
import {
   SET_DATA_LIST,
   SET_ERROR,
   SET_LOADING,
   SET_PAGINATION,
} from "../stores/actions/tableActions";

export const getTableApi = (filters) => async (dispatch) => {
   try {
      dispatch({
         type: SET_LOADING,
         payload: true,
      });

      const url = `https://api.slingacademy.com/v1/sample-data/users?${queryString.stringify(
         filters
      )}`;

      const response = await axios.get(url);
      const data = response.data;

      dispatch({
         type: SET_DATA_LIST,
         payload: data.users,
      });

      dispatch({
         type: SET_PAGINATION,
         payload: {
            limit: data.limit,
            offset: data.offset,
            total_users: data.total_users,
         },
      });

      dispatch({
         type: SET_ERROR,
         payload: false,
      });
   } catch (error) {
      dispatch({
         type: SET_DATA_LIST,
         payload: [],
      });

      dispatch({
         type: SET_PAGINATION,
         payload: {
            total_users: 100,
            offset: 1,
            limit: 10,
         },
      });

      dispatch({
         type: SET_ERROR,
         payload: true,
      });
   } finally {
      dispatch({
         type: SET_LOADING,
         payload: false,
      });
   }
};
