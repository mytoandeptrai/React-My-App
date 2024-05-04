const initialState = {
   data: [],
};

const todoReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_TODO":
         return {
            ...state,
            data: [...state.data, action.payload],
         };
      case "REMOVE_TODO":
         return {
            ...state,
            data: state.data.filter((todo) => todo.id !== action.payload),
         };
      case "ADD_COUNTER_TO_NAME":
         return {
            ...state,
            data: state.data.map((todo) => {
               if (todo.id === action.payload.id) {
                  return {
                     ...todo,
                     name: `${todo.name} ${action.payload.counter}`,
                  };
               }

               return todo;
            }),
         };
      default:
         return state;
   }
};

export default todoReducer;
