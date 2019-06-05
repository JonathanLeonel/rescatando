import { FETCH_BUSCADOS_ACTION, SET_BUSCADOS_ACTION, SET_BUSCADOS_ERROR_ACTION } from "./actions";

const initState = {
  buscados: [],
  fetching: false,
  error: null
};

export const buscadosReducer = (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case FETCH_BUSCADOS_ACTION:
      return { ...state, fetching: true, buscados: action.buscados, error: action.error };
    case SET_BUSCADOS_ACTION:
      return { ...state, fetching: false, buscados: action.buscados, error: action.error };
    case SET_BUSCADOS_ERROR_ACTION:
      return { ...state, fetching: false, buscados: action.buscados, error: action.error };
    default:
      return state;
  }
};
