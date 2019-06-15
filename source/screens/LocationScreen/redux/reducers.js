import { GET_CURRENT_POSITION_ACTION, SET_CURRENT_POSITION_ACTION, SET_CURRENT_POSITION_ERROR_ACTION } from "./actions";

const initState = {
  position: null,
  fetching: false,
  error: null
};

export const positionReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CURRENT_POSITION_ACTION:
      return { ...state, fetching: true, position: action.position, error: action.error };
    case SET_CURRENT_POSITION_ACTION:
      return { ...state, fetching: false, position: action.position, error: action.error };
    case SET_CURRENT_POSITION_ERROR_ACTION:
      return { ...state, fetching: false, position: action.position, error: action.error };
    default:
      return state;
  }
};
