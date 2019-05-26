import { connect } from "react-redux";

import { loginAction } from "../../LoginScreen/LoginComponent/redux/actions";
import BuscadosScreen from "./BuscadosScreen";

export default connect(
  (store, ownProps) => ({
    ...ownProps
  }),
  (dispatch, ownProps) => ({
    ...ownProps,
    onLogout: () => {
      ownProps.navigation.navigate("Auth");
      return dispatch(loginAction(null));
    }
  })
)(BuscadosScreen);
