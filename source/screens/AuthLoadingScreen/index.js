import AuthLoadingScreen from "./AuthLoadingScreen";

import { connect } from "react-redux";

export default connect(
  (store, ownProps) => ({
    currentUser: store.login.currentUser,
    ...ownProps
  }),
  (dispatch, ownProps) => ({ ...ownProps })
)(AuthLoadingScreen);
