import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import AsyncStorage from "@react-native-community/async-storage";

import { loginReducer } from "../screens/LoginScreen/LoginComponent/redux/reducers";
import { buscadosReducer } from "../screens/HomeScreen/BuscadosScreen/redux/reducers";
import { positionReducer } from "../screens/LocationScreen/redux/reducers";

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

const myOwnMiddleware = store => next => action => {
  // console.log(action);
  next(action);
};

export const store = createStore(
  persistReducer(persistConfig, combineReducers({ root: rootReducer, login: loginReducer, buscados: buscadosReducer, location: positionReducer })),
  compose(
    applyMiddleware(myOwnMiddleware),
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);

// window.myStore = store;
