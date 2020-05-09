import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity, 0)
         //reduce() works like a a for loop, 0 is the starting value, accumulatedQuantity is kinda like the equal sign and then cartItem.quantity is the number we want to add.
        //this loops until there are no more values to add. Genious
)