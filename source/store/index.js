import { createStore, combineReducers } from "redux";
import { loginReducer } from "../components/LoginComponent/redux/reducers";

// Estado inicial del state para rootReducer
const initState = {};

// Root Reducer, necesario para crear un store
const rootReducer = (state = initState, action) => {
  console.log(action);
  return state;
};

export default createStore(combineReducers({ root: rootReducer, login: loginReducer }));
