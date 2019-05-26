export const LOGIN_ACTION = "LoginComponent:LOGIN_ACTION";

// export const loginAction = () => {
//   return {
//     type: LOGIN_ACTION
//   };
// };

export const loginAction = currentUser => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: LOGIN_ACTION,
        currentUser
      });
    }, 0);
  };
};
