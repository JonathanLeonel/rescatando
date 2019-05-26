import { LOGIN_ACTION } from "./actions";

const initState = {
  welcome: "Bienvenido a Rescatando",
  currentUser: null
};

export const loginReducer = (state = initState, action) => {
  if (action.type === LOGIN_ACTION) {
    return { ...state, welcome: "Estás logueado!", currentUser: action.currentUser };
  }
  return state;
};
