import { connect } from "react-redux";

import DetalleScreen from "./DetalleScreen";

export default connect(
  (state, ownProps) => ({
    ...ownProps,
    mascota: state.home.mascota
  }),
  (dispatch, ownProps) => ({
    ...ownProps
  })
)(DetalleScreen);
