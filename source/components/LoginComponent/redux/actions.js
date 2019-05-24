export const LOGIN_ACTION = "LoginComponent:LOGIN_ACTION";

// export const loginAction = () => {
//   return {
//     type: LOGIN_ACTION
//   };
// };

export const loginAction = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: LOGIN_ACTION
      });
    }, 1500);
  };
};
