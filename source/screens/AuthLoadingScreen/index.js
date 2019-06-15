import AuthLoadingScreen from "./AuthLoadingScreen";

import { connect } from "react-redux";

export default connect(
  (store, ownProps) => ({
    ...ownProps,
    currentUser: store.login.currentUser
  }),
  (dispatch, ownProps) => ({ ...ownProps })
)(AuthLoadingScreen);
