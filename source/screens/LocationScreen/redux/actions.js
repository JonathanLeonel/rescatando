import Geolocation from "react-native-geolocation-service";

export const GET_CURRENT_POSITION_ACTION = "LocationScreen:GET_CURRENT_POSITION";
export const SET_CURRENT_POSITION_ACTION = "LocationScreen:SET_CURRENT_POSITION";
export const SET_CURRENT_POSITION_ERROR_ACTION = "LocationScreen:SET_CURRENT_POSITION_ERROR";

export const getCurrentPosition = () => {
  return async dispatch => {
    dispatch({ type: GET_CURRENT_POSITION_ACTION });
    try {
      Geolocation.getCurrentPosition(
        position => {
          dispatch(setPosition(position));
        },
        error => {
          dispatch(setPositionError(error));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60 * 60 * 1000
        }
      );
    } catch (error) {
      dispatch(setPositionError(error));
    }
  };
};

export const setPosition = position => {
  return {
    type: SET_CURRENT_POSITION_ACTION,
    position,
    error: null
  };
};

export const setPositionError = error => {
  return {
    type: SET_CURRENT_POSITION_ERROR_ACTION,
    position: null,
    error
  };
};
