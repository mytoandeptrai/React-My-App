import { DECREMENT_ACTION, INCREMENT_ACTION } from "../actions/counterActions";

const initialState = {
   counter: 0,
   isBoolean: false,
   dataMock: [],
};

const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case INCREMENT_ACTION:
         return { ...state, counter: state.counter + action.payload };
      case DECREMENT_ACTION:
         return { ...state, counter: state.counter - action.payload };
      default:
         return state;
   }
};

export default counterReducer;
