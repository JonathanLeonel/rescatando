import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import AsyncStorage from "@react-native-community/async-storage";

import { loginReducer } from "../screens/LoginScreen/LoginComponent/redux/reducers";
import thunk from "redux-thunk";

// Configuracion de persist para redux-persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconcilier: hardSet
};

// Estado inicial del state para rootReducer
const initState = {};

// Root Reducer, necesario para crear un store
const rootReducer = (state = initState, action) => {
  return state;
};

export const store = createStore(persistReducer(persistConfig, combineReducers({ root: rootReducer, login: loginReducer })), applyMiddleware(thunk));

export const persistor = persistStore(store);

// window.myStore = store;
