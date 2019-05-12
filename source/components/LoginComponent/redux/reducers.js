import { LOGIN_ACTION } from "./actions";

const initState = {
  welcome: "Bienvenido a Rescatando"
};

export const loginReducer = (state = initState, action) => {
  if (action.type === LOGIN_ACTION) {
    return { ...state, welcome: "Estás logueado!" };
  }
  return { ...state };
};
