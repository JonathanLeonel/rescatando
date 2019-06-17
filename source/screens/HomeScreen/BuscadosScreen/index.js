import { connect } from "react-redux";

import { fetchBuscados } from "./redux/actions";
import { setMascota } from "../redux/actions";
import BuscadosScreen from "./BuscadosScreen";

export default connect(
  (state, ownProps) => ({
    ...ownProps,
    buscados: state.buscados.buscados,
    error: state.buscados.error,
    fetching: state.buscados.fetching,
    position: state.location.position
  }),
  (dispatch, ownProps) => ({
    ...ownProps,
    onLogout: () => {
      ownProps.navigation.navigate("Auth");
      return dispatch(loginAction(null));
    },
    fetchBuscados: () => {
      return dispatch(fetchBuscados());
    },
    setMascota: mascota => {
      return dispatch(setMascota(mascota));
    }
  })
)(BuscadosScreen);
