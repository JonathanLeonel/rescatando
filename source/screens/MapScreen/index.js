import { connect } from "react-redux";

import MapScreen from "./MapScreen";

export default connect(
  (store, ownProps) => ({
    ...ownProps
  }),
  (dispatch, ownProps) => ({
    ...ownProps
  })
)(MapScreen);
