import { setBuscados } from "../../HomeScreen/BuscadosScreen/redux/actions";
import { uploadBusqueda } from "../../../../rescatandoApiMock";

export const UPLOAD_BUSQUEDA_ACTION = "FormScreen:UPLOAD_BUSQUEDA";
export const UPLOAD_BUSQUEDA_SUCCESS_ACTION = "FormScreen:UPLOAD_BUSQUEDA_SUCCESS";
export const UPLOAD_BUSQUEDA_ERROR_ACTION = "FormScreen:UPLOAD_BUSQUEDA_ERROR";
export const UPLOAD_BUSQUEDA_CLEAN_ACTION = "FormScreen:UPLOAD_BUSQUEDA_CLEAN_ACTION";

export const uploadBusquedaAction = busqueda => {
  return async dispatch => {
    dispatch({ type: UPLOAD_BUSQUEDA_ACTION });
    try {
      const buscados = await uploadBusqueda(busqueda);
      dispatch({ type: UPLOAD_BUSQUEDA_SUCCESS_ACTION, busqueda });
      dispatch(setBuscados(buscados));
    } catch (error) {
      dispatch(setUploadBusquedaError(error));
    }
  };
};

export const setUploadBusquedaError = error => {
  return {
    type: UPLOAD_BUSQUEDA_ERROR_ACTION,
    error
  };
};

export const limpiarBusqueda = error => {
  return {
    type: UPLOAD_BUSQUEDA_CLEAN_ACTION
  };
};
