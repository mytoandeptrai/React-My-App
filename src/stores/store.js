import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducer";
import tableReducer from "./reducers/tableReducer";

const rootReducer = combineReducers({
   counterState: counterReducer,
   todoState: todoReducer,
   userState: userReducer,
   tableState: tableReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk))
);

export default store;
