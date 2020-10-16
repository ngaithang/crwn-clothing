import { UserActionTypes } from "./user.types";

// create action function
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
