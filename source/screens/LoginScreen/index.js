import LoginScreen from "./LoginScreen";

import { connect } from "react-redux";

export default connect(
  (store, ownProps) => ({
    currentUser: store.login.currentUser,
    ...ownProps
  }),
  (dispatch, ownProps) => ({ ...ownProps })
)(LoginScreen);
