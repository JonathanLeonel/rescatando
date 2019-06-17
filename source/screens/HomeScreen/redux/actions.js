export const SET_MASCOTA_ACTION = "HomeScreen::SET_MASCOTA";

export const setMascota = mascota => {
  return { type: SET_MASCOTA_ACTION, mascota };
};
