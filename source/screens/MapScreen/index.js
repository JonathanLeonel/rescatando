import { connect } from "react-redux";

import MapScreen from "./MapScreen";

import { setMascota } from "../HomeScreen/redux/actions";

export default connect(
  (store, ownProps) => ({
    ...ownProps
  }),
  (dispatch, ownProps) => ({
    ...ownProps,
    setMascota: mascota => {
      return dispatch(setMascota(mascota));
    }
  })
)(MapScreen);
