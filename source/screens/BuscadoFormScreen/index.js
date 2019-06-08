import BuscadoFormScreen from "./BuscadoFormScreen";

import { uploadBusquedaAction, limpiarBusqueda } from "./redux/actions";

import { connect } from "react-redux";

export default connect(
  (state, ownProps) => ({
    // currentUser: store.login.currentUser,
    busqueda: state.uploadBusqueda.busqueda,
    error: state.uploadBusqueda.error,
    uploading: state.uploadBusqueda.uploading,
    ...ownProps
  }),
  (dispatch, ownProps) => ({
    ...ownProps,
    uploadBusqueda: busqueda => dispatch(uploadBusquedaAction(busqueda)),
    limpiarBusqueda: () => {
      dispatch(limpiarBusqueda());
    }
  })
)(BuscadoFormScreen);

// const subirBusqueda = busqueda => {
//   console.log("Está por subir una búsqueda: ", busqueda);
// };
