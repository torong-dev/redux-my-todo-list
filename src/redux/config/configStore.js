import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";

// 1. create rootReducer with reducers
const rootReducer = combineReducers({
  todos,
});

// 2. crate store
const store = createStore(rootReducer);

export default store;
