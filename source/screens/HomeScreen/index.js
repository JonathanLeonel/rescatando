import { connect } from "react-redux";

import HomeScreen from "./HomeScreen";

export default connect(
  (state, ownProps) => ({
    ...ownProps
  }),
  (dispatch, ownProps) => ({
    ...ownProps
  })
)(HomeScreen);
