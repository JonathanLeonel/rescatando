import { UPLOAD_BUSQUEDA_ACTION, UPLOAD_BUSQUEDA_SUCCESS_ACTION, UPLOAD_BUSQUEDA_ERROR_ACTION, UPLOAD_BUSQUEDA_CLEAN_ACTION } from "./actions";

const initState = {
  busqueda: null,
  uploading: false,
  error: null
};

export const uploadBusquedaReducer = (state = initState, action) => {
  switch (action.type) {
    case UPLOAD_BUSQUEDA_ACTION:
      return { ...state, uploading: true, busqueda: null, error: null };
    case UPLOAD_BUSQUEDA_SUCCESS_ACTION:
      return { ...state, uploading: false, busqueda: action.busqueda, error: null };
    case UPLOAD_BUSQUEDA_ERROR_ACTION:
      return { ...state, uploading: false, busqueda: null, error: action.error };
    case UPLOAD_BUSQUEDA_CLEAN_ACTION:
      return { ...state, uploading: false, busqueda: null, error: null };
    default:
      return state;
  }
};
