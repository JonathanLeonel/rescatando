import { getBuscados } from "../../../../../rescatandoApiMock";

export const FETCH_BUSCADOS_ACTION = "BuscadosScreen:FETCH_BUSCADOS";
export const SET_BUSCADOS_ACTION = "BuscadosScreen:SET_BUSCADOS";
export const SET_BUSCADOS_ERROR_ACTION = "BuscadosScreen:SET_BUSCADOS_ERROR";

export const fetchBuscados = () => {
  return async dispatch => {
    dispatch({ type: FETCH_BUSCADOS_ACTION, buscados: null, error: null });
    try {
      const buscados = await getBuscados();
      dispatch(setBuscados(buscados));
    } catch (error) {
      dispatch(setBuscadosError(error));
    }
  };
};

export const setBuscados = buscados => {
  return {
    type: SET_BUSCADOS_ACTION,
    buscados,
    error: null
  };
};

export const setBuscadosError = error => {
  return {
    type: SET_BUSCADOS_ERROR_ACTION,
    buscados: [],
    error
  };
};
