const initialState = {
   users: [],
   loading: false,
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_USERS":
         return {
            ...state,
            users: action.payload,
         };
      case "ADD_LOADING":
         return {
            ...state,
            loading: action.payload,
         };
      case "REMOVE_LOADING":
         return {
            ...state,
            loading: action.payload,
         };
      default:
         return state;
   }
};

export default userReducer;
