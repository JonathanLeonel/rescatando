import LoginComponent from "./LoginComponent";

import { connect } from "react-redux";

import { loginAction } from "./redux/actions";

export default connect(
  store => ({
    welcome: store.login.welcome
  }),
  dispatch => ({ onLogin: () => dispatch(loginAction()) })
)(LoginComponent);
