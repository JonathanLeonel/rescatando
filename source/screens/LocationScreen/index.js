import { connect } from "react-redux";

import LocationScreen from "./LocationScreen";
import { getCurrentPosition } from "./redux/actions";

export default connect(
  (state, ownProps) => ({
    ...ownProps,
    position: state.location.position,
    error: state.location.error
    // fetching: state.location.fetching
  }),
  (dispatch, ownProps) => ({
    ...ownProps,
    getCurrentPosition: position => dispatch(getCurrentPosition(position))
  })
)(LocationScreen);
