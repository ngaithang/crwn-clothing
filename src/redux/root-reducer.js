import { combineReducers } from "redux";

// break into individual state
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// all the states of the app
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
