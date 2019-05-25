import LoginComponent from "./LoginComponent";

import { connect } from "react-redux";

import { loginAction } from "./redux/actions";

export default connect(
  (store, ownProps) => ({
    welcome: store.login.welcome,
    ...ownProps
  }),
  (dispatch, ownProps) => ({ onLogin: () => dispatch(loginAction()), ...ownProps })
)(LoginComponent);
