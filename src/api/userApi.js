import axios from "axios";

export const getUserApi = (value) => async (dispatch) => {
   try {
      dispatch({
         type: "ADD_LOADING",
         payload: true,
      });

      const url = "http://localhost:5000/users";
      const response = await axios.get(url);

      dispatch({
         type: "ADD_USERS",
         payload: response.data,
      });
   } catch (error) {
      dispatch({
         type: "ADD_LOADING",
         payload: [],
      });
   } finally {
      dispatch({
         type: "ADD_LOADING",
         payload: false,
      });
   }
};
