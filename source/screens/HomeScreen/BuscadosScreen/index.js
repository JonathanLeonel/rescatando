import { connect } from "react-redux";

import { fetchBuscados } from "./redux/actions";
import BuscadosScreen from "./BuscadosScreen";

export default connect(
  (state, ownProps) => ({
    ...ownProps,
    buscados: state.buscados.buscados,
    error: state.buscados.error,
    fetching: state.buscados.fetching
  }),
  (dispatch, ownProps) => ({
    ...ownProps,
    onLogout: () => {
      ownProps.navigation.navigate("Auth");
      return dispatch(loginAction(null));
    },
    fetchBuscados: () => {
      return dispatch(fetchBuscados());
    }
  })
)(BuscadosScreen);
