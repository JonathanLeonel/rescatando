import { SET_MASCOTA_ACTION } from "./actions";

const initState = {
  mascota: {}
};

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MASCOTA_ACTION:
      return { ...state, mascota: action.mascota };
    default:
      return state;
  }
};
