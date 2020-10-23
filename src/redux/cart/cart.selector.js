import { createSelector } from "reselect";

// input selector, get state, just cart of it
const selectCart = (state) => state.cart;

// output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItems) =>
        accumalatedQuantity + cartItems.quantity,
      0
    )
);
